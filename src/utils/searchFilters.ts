import { estypes } from '@elastic/elasticsearch';
import { RequestQuery } from '@hapi/hapi';

import { BASE_PATH, webRoutePaths } from './constants';
import { convertToDate } from './dates';
import { getMetaQueryParams, readQueryParams } from './queryStringHelper';

export const filterNames = {
  scope: 'scope',
  retiredAndArchived: 'retired-archived',
  keywords: 'keywords',
  licence: 'licence',
  updatedBefore: 'date-before',
  updatedAfter: 'date-after',
};

export enum DataScopeValues {
  ALL = 'all',
  NCEA = 'ncea',
}

interface ISearchFilterOption {
  name: string;
  value: string;
  hasNCEAData?: boolean;
}

type ISearchFilter = {
  name: string;
  value: string;
  filters: ISearchFilterOption[];
};

export interface ISearchFilterProcessed {
  name: string;
  value: string;
  selectedAll: boolean;
  filters: ({ checked: boolean } & ISearchFilterOption)[];
}

export type ISearchFilters = ISearchFilter[];
export interface ISearchFiltersProcessed {
  nceaOnly: boolean;
  categories: ISearchFilterProcessed[];
  keywords: string[];
  license: string;
  lastUpdated: {
    beforeYear: string;
    afterYear: string;
  };
  retiredAndArchived: boolean;
}

export const buildFilterResetUrl = (requestQuery: RequestQuery): string => {
  const nceaOnly = readQueryParams(requestQuery, filterNames.scope) === DataScopeValues.NCEA;

  // this will only return the meta params important to the query
  // this is required otherwise the reset url would reflect all the filters enabled, which
  // would mean nothing gets reset.
  const params = getMetaQueryParams(requestQuery);

  params.set(filterNames.scope, nceaOnly ? DataScopeValues.NCEA : DataScopeValues.ALL);

  return `${BASE_PATH}${webRoutePaths.results}?${params.toString()}`;
};

/**
 * This function will escape any characters special to a regex, in a given string. This is
 * useful when user input is turned into a regex, as it prevents them using characters that
 * would be interpreted as regex instructions.
 *
 * ```js
 * let userInput = 'string.to*escape';
 * console.log(escapeRegExp(userInput));
 * // > 'string\\.to\\*escape'
 * ```
 * This function is temporary until the search API from AGM is finished.
 */
const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

// this is here to describe the keys that need to exist on
// the `estypes.SearchResponse` object
interface ESFilterKeys {
  status: 'active' | 'retired';
  resourceTitleObject: { langeng: string };
  resourceAbstractObject: { langeng: string };
  revisionDateForResource: string[];
  MD_LegalConstraintsOtherConstraintsObject: string;
  MD_LegalConstraintsUseLimitationObject?: string;
  organisationValue: string;
  geom?: object;
  linkProtocol?: string[];
  format?: string[];
}

export const applyMockFilters = (
  input: estypes.SearchResponse<ESFilterKeys>,
  filters: ISearchFiltersProcessed,
  query: string,
): estypes.SearchResponse<ESFilterKeys> => {
  const queryRegex = new RegExp(escapeRegExp(query), 'i');

  // since the mock data is just an object in a TS file,
  // the fact that this function modifies in-place means the
  // variable would be modified which causes future-filtering to
  // fail since the output of previous filters are carried over
  // this deep-clones the object from the variable
  const clonedInput = JSON.parse(JSON.stringify(input));
  const results = clonedInput.hits;

  if (!filters.retiredAndArchived) {
    results.hits = results.hits.filter((hit) => hit._source?.status !== 'retired');
  }

  if (filters.keywords.length > 0) {
    // split keywords by a few different delimiters
    const keywords = filters.keywords.map((k) => k.trim());

    results.hits = results.hits.filter((hit) => {
      return keywords.some((keyword) => {
        // turn into a regex for case-insensitive match
        const rg = new RegExp(escapeRegExp(keyword), 'i');

        return (
          rg.test(hit._source?.resourceTitleObject?.default ?? '') ||
          rg.test(hit._source?.resourceAbstractObject?.default ?? '')
        );
      });
    });
  }

  if (filters.license.length > 0) {
    results.hits = results.hits.filter((hit) => {
      // turn into a regex for case-insensitive match
      const rg = new RegExp(escapeRegExp(filters.license), 'i');

      // may have more than once license so flatten them into a single array
      return [
        ...(hit._source?.MD_LegalConstraintsOtherConstraintsObject ?? []),
        ...(hit._source?.MD_LegalConstraintsUseLimitationObject ?? []),
      ].some((licence) => {
        return rg.test(licence.default ?? '');
      });
    });
  }

  const filterBeforeYear = filters.lastUpdated.beforeYear;
  const filterAfterYear = filters.lastUpdated.afterYear;
  // if any one of day/month/year contains a value, do the filtering
  if (filterBeforeYear.length > 0 || filterAfterYear.length > 0) {
    results.hits = results.hits.filter((hit) => {
      const temporalExtent = [...(hit._source?.resourceTemporalDateRange ?? [])].pop(); // get last item (most recent update)
      if (!temporalExtent) {
        return false;
      }

      const extentStart = new Date(temporalExtent.gte);
      const extentEnd = new Date(temporalExtent.lte);

      if (isNaN(extentStart.getTime()) || isNaN(extentEnd.getTime())) {
        return false;
      }

      // default to `true` so no results are excluded if either date is invalid
      let isWithinDate = true;

      const filterBeforeDate = convertToDate('31', '12', filterBeforeYear);
      if (!filterBeforeDate) {
        // if the date is invalid, dont exclude any results
        return isWithinDate;
      }

      isWithinDate = isWithinDate && extentStart <= filterBeforeDate;

      const filterAfterDate = convertToDate('1', '1', filterAfterYear);
      if (!filterAfterDate) {
        // if the date is invalid, dont exclude any results
        return isWithinDate;
      }

      return isWithinDate && extentEnd >= filterAfterDate;
    });
  }

  filters.categories.forEach((cat) => {
    // get all selected filters in this category
    // if `All` is selected, ignore getting the other selected values
    const valuesSelected = cat.selectedAll ? [] : cat.filters.filter((f) => f.checked).map((f) => f.value);

    results.hits = results.hits.filter((hit) => {
      if (cat.selectedAll) {
        return true;
      }

      switch (cat.value) {
        case 'org':
          // we want to return `true` if no values are selected
          return (
            valuesSelected.length === 0 || valuesSelected.includes(hit._source?.contact?.[0].organisationValue ?? '')
          );
        case 'st':
          // currently the only possible value is `title` anyway
          return valuesSelected.includes('title')
            ? queryRegex.test(hit._source?.resourceTitleObject?.default ?? '')
            : true;
        case 'dt':
          if (valuesSelected.length === 0) {
            return true;
          }
          if (valuesSelected.includes('spatial')) {
            return !!hit._source?.geom;
          } else {
            // non-spatial
            return !hit._source?.geom;
          }
        case 'svt':
          return (
            valuesSelected.length === 0 ||
            (hit._source?.linkProtocol && valuesSelected.some((v) => hit._source?.linkProtocol.includes(v)))
          );
        case 'fmt':
          return (
            valuesSelected.length === 0 ||
            (hit._source?.format && valuesSelected.some((v) => hit._source?.format.includes(v)))
          );
      }

      return true;
    });
  });

  if (typeof results.total === 'number') {
    results.total = results.hits.length;
  } else {
    results.total && (results.total.value = results.hits.length);
  }

  return clonedInput;
};

// the `All` option is added automatically
// the `Date last updated`, `Licence` `Keywords`, `Include Retired & Archived records` filters are added manually
// as they differ from these filters
export const searchFilters: ISearchFilters = [
  {
    name: 'Organisation',
    value: 'org',
    filters: [
      {
        name: 'Agriculture & Horticulture Development Board',
        value: 'ahdb',
        hasNCEAData: false,
      },
      {
        name: 'Animal & Plant Health Agency',
        value: 'apha',
        hasNCEAData: false,
      },
      {
        name: 'Centre for Environment, Fisheries & Aquaculture Science',
        value: 'cefas',
        hasNCEAData: false,
      },
      {
        name: 'Department for Environment, Food & Rural Affairs',
        value: 'defra',
        hasNCEAData: false,
      },
      {
        name: 'Environment Agency',
        value: 'ea',
        hasNCEAData: true,
      },
      {
        name: 'Forestry Commission',
        value: 'fc',
        hasNCEAData: true,
      },
      {
        name: 'Joint Nature Conservation Committee',
        value: 'jncc',
        hasNCEAData: false,
      },
      {
        name: 'KEW',
        value: 'kew',
        hasNCEAData: false,
      },
      {
        name: 'Marine Management Organisation',
        value: 'mmo',
        hasNCEAData: false,
      },
      {
        name: 'Natural England',
        value: 'ne',
        hasNCEAData: true,
      },
      {
        name: 'Rural Payments Agency',
        value: 'rpa',
        hasNCEAData: false,
      },
    ],
  },
  {
    name: 'Search Type',
    value: 'st',
    filters: [
      {
        name: 'Title',
        value: 'title',
      },
    ],
  },
  {
    name: 'Data Type',
    value: 'dt',
    filters: [
      {
        name: 'Spatial',
        value: 'spatial',
      },
      {
        name: 'Non-Spatial',
        value: 'non-spatial',
      },
    ],
  },
  {
    name: 'Service Type',
    value: 'svt',
    filters: [
      {
        name: 'HTTP File Download',
        value: 'http-fd',
      },
      {
        name: 'HTTP Web Resource',
        value: 'http-wr',
      },
      {
        name: 'HTTP Application',
        value: 'http-app',
      },
      {
        name: 'FTP File Download',
        value: 'ftp-fd',
      },
      {
        name: 'WMS',
        value: 'wms',
      },
      {
        name: 'WFS',
        value: 'wfs',
      },
      {
        name: 'WCS',
        value: 'wcs',
      },
      {
        name: 'ESRI REST API',
        value: 'esri',
      },
      {
        name: 'OGC API Features',
        value: 'ogc',
      },
      {
        name: 'REST API',
        value: 'rest',
      },
      {
        name: 'SOAP API',
        value: 'soap',
      },
    ],
  },
  {
    name: 'Data Format',
    value: 'fmt',
    filters: [
      {
        name: 'Comma Separate Values file (CSV)',
        value: 'csv',
      },
      {
        name: 'MS Word 2010 onwards document (DOC)',
        value: 'doc',
      },
      {
        name: 'MS Word 2010 onwards document (DOCX)',
        value: 'docx',
      },
      {
        name: 'ESRI, Intergraph, MS Access (MDB)',
        value: 'mdb',
      },
      {
        name: 'Shapefile',
        value: 'shp',
      },
      {
        name: 'Plain Text File',
        value: 'txt',
      },
      {
        name: 'MS Excel (XLS)',
        value: 'xls',
      },
      {
        name: 'MS Excel (XLSX)',
        value: 'xlsx',
      },
      {
        name: 'Access 2007 onwards database (ACCDB)',
        value: 'accdb',
      },
      {
        name: 'Arc/Info Binary Grid (AIG)',
        value: 'aig',
      },
      {
        name: 'Arc/Info ASCII Grid (AAIGrid)',
        value: 'aaig',
      },
      {
        name: 'ASCII Gridded XYZ (XYZ)',
        value: 'xyz',
      },
      {
        name: 'ASCII Text Files (non-csv, non-xyz gridded, non-tab separated format)',
        value: 'asciitxt',
      },
      {
        name: 'Bathymetric Attributed Grid (BAG)',
        value: 'bag',
      },
      {
        name: 'CAD Data eXchange Format (DXF)',
        value: 'dxf',
      },
      {
        name: 'CAD Drawing file (DWG)',
        value: 'dwg',
      },
      {
        name: 'Catalogue Service for the Web (CSW)',
        value: 'csw',
      },
      {
        name: 'City GML (Citygml)',
        value: 'citygml',
      },
      {
        name: 'dBASE (DBF)',
        value: 'dbf',
      },
      {
        name: 'ER Mapper (ECW)',
        value: 'ecw',
      },
      {
        name: 'ERDAS IMAGINE (IMG)',
        value: 'img',
      },
      {
        name: 'ERDASRaw (RAW)',
        value: 'raw',
      },
      {
        name: 'Generic Sensor Format (ALL)',
        value: 'gsf-all',
      },
      {
        name: 'Graphical Interchange Format (GIF)',
        value: 'gif',
      },
      {
        name: 'Geo Tagged Image File Format (GeoTIFF)',
        value: 'geotiff',
      },
      {
        name: 'Geography Markup Language (GML)',
        value: 'gml',
      },
      {
        name: 'GeoPackage (GPKG)',
        value: 'gpkg',
      },
      {
        name: 'GeoRSS (Geo)',
        value: 'geo',
      },
      {
        name: 'GPS Exchange Format (GPX)',
        value: 'gpx',
      },
      {
        name: 'Fledermaus scientific data (SD)',
        value: 'sd',
      },
      {
        name: 'Fledermaus scientific data scene (SCENE)',
        value: 'scene',
      },
      {
        name: 'JavaScript Object Notation (GeoJSON)',
        value: 'geojson',
      },
      {
        name: 'JavaScript Object Notation (JSON)',
        value: 'json',
      },
      {
        name: 'Joint Photographic Experts Group (JPEG)',
        value: 'jpeg',
      },
      {
        name: 'Joint Photographic Experts Group 2000 (JPEG2000)',
        value: 'jpeg2000',
      },
      {
        name: 'Keyhole Markup Language (KML)',
        value: 'kml',
      },
      {
        name: 'Keyhole Markup Language Zipped (KMZ)',
        value: 'kmz',
      },
      {
        name: 'Lidar Data Exchange Format (LAS)',
        value: 'las',
      },
      {
        name: 'Lidar Data Exchange Format (LAZ)',
        value: 'laz',
      },
      {
        name: 'Lemuel-Ziv and Welch (TIFF)',
        value: 'tiff',
      },
      {
        name: 'Many DAT formats (DAT)',
        value: 'dat',
      },
      {
        name: 'Many XML formats (XML)',
        value: 'xml',
      },
      {
        name: 'MapInfo (TAB)',
        value: 'tab',
      },
      {
        name: 'MapInfo MIF/MID (MIF)',
        value: 'mif',
      },
      {
        name: 'Microsoft Office Pipe Separated Values file format (PSV)',
        value: 'psv',
      },
      {
        name: 'Multi-resolution Seamless Image Database (MrSID)',
        value: 'mrsid',
      },
      {
        name: 'National Transfer Format - OS (NTF)',
        value: 'ntf',
      },
      {
        name: 'Open Document Presentation (ODP)',
        value: 'odp',
      },
      {
        name: 'Open Document Spreadsheet (ODS)',
        value: 'ods',
      },
      {
        name: 'Open Document Text (ODT)',
        value: 'odt',
      },
      {
        name: 'Outlook File Template (OFT)',
        value: 'oft',
      },
      {
        name: 'Packbit (TIFF)',
        value: 'tiff',
      },
      {
        name: 'Portable Document Format - 3D (PDF)',
        value: 'pdf',
      },
      {
        name: 'Portable Document Format - GeoReferenced (PDF)',
        value: 'pdf',
      },
      {
        name: 'Portable Document Format - Standardized (PDF)',
        value: 'pdf',
      },
      {
        name: 'Portable Document Format - Unreferenced (PDF)',
        value: 'pdf',
      },
      {
        name: 'Portable Network Graphic (PNG)',
        value: 'png',
      },
      {
        name: 'Resource Description Framework (RDF)',
        value: 'rdf',
      },
      {
        name: 'Resource Description Framework (XML)',
        value: 'xml',
      },
      {
        name: 'Rich Text Format (RTF)',
        value: 'rtf',
      },
      {
        name: 'Tab Separated Values (TSV)',
        value: 'tsv',
      },
      {
        name: 'Tagged Image File Format (TIFF)',
        value: 'tiff',
      },
      {
        name: 'Lempel-Ziv and Welch (TIFF)',
        value: 'tiff',
      },
      {
        name: 'Apache Parquet (PARQUET)',
        value: 'parquet',
      },
      {
        name: 'City GML (CiCompressedtygml)',
        value: 'cicmptygml',
      },
      {
        name: 'FASTQ Biological Sequence File (FASTQ)',
        value: 'fastq',
      },
      {
        name: 'FASTA Biological Sequence File (FASTA)',
        value: 'fasta',
      },
      {
        name: 'Free Lossless Audio Codec (FLAC)',
        value: 'flac',
      },
      {
        name: 'MPEG Audio Layer 3 (MP3)',
        value: 'mp3',
      },
      {
        name: 'R Script File (R)',
        value: 'r',
      },
      {
        name: 'Audio Video Interleave (AVI)',
        value: 'avi',
      },
      {
        name: 'Enhanced Compression Wavelet (ECW)',
        value: 'ecw',
      },
      {
        name: 'ESRI Layer (LYR)',
        value: 'lyr',
      },
      {
        name: 'ESRI Layer (LYRX)',
        value: 'lyrx',
      },
      {
        name: 'MPEG-4 Video file (MP4)',
        value: 'mp4',
      },
      {
        name: 'QuickTime File Format (MOV)',
        value: 'mov',
      },
      {
        name: 'Waveform Audio File Format (WAV)',
        value: 'wav',
      },
      {
        name: 'QIIME Zipped Artifact (QZA)',
        value: 'qza',
      },
      {
        name: 'Biological Observation Matrix (BIOM)',
        value: 'biom',
      },
      {
        name: 'GNU zip archive (GZIP)',
        value: 'gzip',
      },
      {
        name: 'Compressed tape archive (TAR.GZ)',
        value: 'targz',
      },
    ],
  },
];
