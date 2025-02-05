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

export enum DataScope {
  ALL = 'all',
  NCEA = 'ncea',
}

interface ISearchFilterOption {
  name: string;
  value: string;
  scope: DataScope.NCEA | DataScope.ALL;
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
  const nceaOnly = readQueryParams(requestQuery, filterNames.scope) === DataScope.NCEA;

  // this will only return the meta params important to the query
  // this is required otherwise the reset url would reflect all the filters enabled, which
  // would mean nothing gets reset.
  const params = getMetaQueryParams(requestQuery);

  params.set(filterNames.scope, nceaOnly ? DataScope.NCEA : DataScope.ALL);

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
        scope: DataScope.ALL,
      },
      {
        name: 'Animal & Plant Health Agency',
        value: 'apha',
        scope: DataScope.ALL,
      },
      {
        name: 'Centre for Environment, Fisheries & Aquaculture Science',
        value: 'cefas',
        scope: DataScope.ALL,
      },
      {
        name: 'Department for Environment, Food & Rural Affairs',
        value: 'defra',
        scope: DataScope.ALL,
      },
      {
        name: 'Environment Agency',
        value: 'ea',
        scope: DataScope.NCEA,
      },
      {
        name: 'Forestry Commission',
        value: 'fc',
        scope: DataScope.NCEA,
      },
      {
        name: 'Joint Nature Conservation Committee',
        value: 'jncc',
        scope: DataScope.ALL,
      },
      {
        name: 'KEW',
        value: 'kew',
        scope: DataScope.ALL,
      },
      {
        name: 'Marine Management Organisation',
        value: 'mmo',
        scope: DataScope.ALL,
      },
      {
        name: 'Natural England',
        value: 'ne',
        scope: DataScope.NCEA,
      },
      {
        name: 'Rural Payments Agency',
        value: 'rpa',
        scope: DataScope.ALL,
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
        scope: DataScope.ALL,
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
        scope: DataScope.ALL,
      },
      {
        name: 'Non-Spatial',
        value: 'non-spatial',
        scope: DataScope.ALL,
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
        scope: DataScope.ALL,
      },
      {
        name: 'HTTP Web Resource',
        value: 'http-wr',
        scope: DataScope.ALL,
      },
      {
        name: 'HTTP Application',
        value: 'http-app',
        scope: DataScope.ALL,
      },
      {
        name: 'FTP File Download',
        value: 'ftp-fd',
        scope: DataScope.ALL,
      },
      {
        name: 'WMS',
        value: 'wms',
        scope: DataScope.ALL,
      },
      {
        name: 'WFS',
        value: 'wfs',
        scope: DataScope.ALL,
      },
      {
        name: 'WCS',
        value: 'wcs',
        scope: DataScope.ALL,
      },
      {
        name: 'ESRI REST API',
        value: 'esri',
        scope: DataScope.ALL,
      },
      {
        name: 'OGC API Features',
        value: 'ogc',
        scope: DataScope.ALL,
      },
      {
        name: 'REST API',
        value: 'rest',
        scope: DataScope.ALL,
      },
      {
        name: 'SOAP API',
        value: 'soap',
        scope: DataScope.ALL,
      },
    ],
  },
  {
    name: 'Data Format',
    value: 'fmt',
    filters: [
      {
        name: 'Comma Separated Values file (CSV)',
        value: 'Open format | Comma Separated Values file (CSV)',
        scope: DataScope.ALL,
      },
      {
        name: 'MS Word 2010 onwards document (DOC)',
        value: 'Proprietary format | MS Word 2010 onwards document (DOC)',
        scope: DataScope.ALL,
      },
      {
        name: 'MS Word 2010 onwards document (DOCX)',
        value: 'Proprietary format | MS Word 2010 onwards document (DOCX)',
        scope: DataScope.ALL,
      },
      {
        name: 'ESRI, Intergraph, MS Access (MDB)',
        value: 'Proprietary format | ESRI, Intergraph, MS Access (MDB)',
        scope: DataScope.ALL,
      },
      { name: 'Shapefile (SHP)', value: 'Open format | Shapefile (SHP)', scope: DataScope.ALL },
      { name: 'Plain Text File (TXT)', value: 'Open Format | Plain Text File (TXT)', scope: DataScope.ALL },
      { name: 'MS Excel (XLSX)', value: 'Open format | MS Excel (XLSX)', scope: DataScope.ALL },
      {
        name: 'Access 2007 onwards database (ACCDB)',
        value: 'Proprietary format | Access 2007 onwards database (ACCDB)',
        scope: DataScope.ALL,
      },
      {
        name: 'Arc/Info Binary Grid (AIG)',
        value: 'Proprietary Format | Arc/Info Binary Grid (AIG)',
        scope: DataScope.ALL,
      },
      {
        name: 'Arc/Info ASCII Grid (AAIGrid)',
        value: 'Open format | Arc/Info ASCII Grid (AAIGrid)',
        scope: DataScope.ALL,
      },
      { name: 'ASCII Gridded XYZ (XYZ)', value: 'Open Format | ASCII Gridded XYZ (XYZ)', scope: DataScope.ALL },
      {
        name: 'ASCII Text Files (non-csv, non-xyz gridded, non-tab separated format)',
        value: 'Open Format | ASCII Text Files (non-csv, non-xyz gridded, non-tab separated format)',
        scope: DataScope.ALL,
      },
      {
        name: 'Bathymetric Attributed Grid (BAG)',
        value: 'Open Format | Bathymetric Attributed Grid (BAG)',
        scope: DataScope.ALL,
      },
      {
        name: 'CAD Data eXchange Format (DXF)',
        value: 'Open format | CAD Data eXchange Format (DXF)',
        scope: DataScope.ALL,
      },
      { name: 'CAD Drawing file (DWG)', value: 'Proprietary format | CAD Drawing file (DWG)', scope: DataScope.ALL },
      {
        name: 'Catalogue Service for the Web (CSW)',
        value: 'OGC Web Services | Catalogue Service for the Web (CSW)',
        scope: DataScope.ALL,
      },
      { name: 'City GML (Citygml)', value: 'Open format | City GML (Citygml)', scope: DataScope.ALL },
      { name: 'dBASE (DBF)', value: 'Open format | dBASE (DBF)', scope: DataScope.ALL },
      { name: 'ER Mapper (ECW)', value: 'Proprietary format | ER Mapper (ECW)', scope: DataScope.ALL },
      { name: 'ERDAS IMAGINE (IMG)', value: 'Proprietary format | ERDAS IMAGINE (IMG)', scope: DataScope.ALL },
      { name: 'ERDASRaw (RAW)', value: 'Proprietary format | ERDASRaw (RAW)', scope: DataScope.ALL },
      {
        name: 'Generic Sensor Format (ALL)',
        value: 'Proprietary format | Generic Sensor Format (ALL)',
        scope: DataScope.ALL,
      },
      {
        name: 'Graphical Interchange Format (GIF)',
        value: 'Proprietary format | Graphical Interchange Format (GIF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Geo Tagged Image File Format (GeoTIFF)',
        value: 'Open format | Geo Tagged Image File Format (GeoTIFF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Geography Markup Language (GML)',
        value: 'Open format | Geography Markup Language (GML)',
        scope: DataScope.ALL,
      },
      { name: 'GeoPackage (GPKG)', value: 'Open format | GeoPackage (GPKG)', scope: DataScope.ALL },
      { name: 'GeoRSS (Geo)', value: 'Open format | GeoRSS (Geo)', scope: DataScope.ALL },
      { name: 'GPS Exchange Format (GPX)', value: 'Open format | GPS Exchange Format (GPX)', scope: DataScope.ALL },
      {
        name: 'Fledermaus scientific data (SD)',
        value: 'Proprietary format | Fledermaus scientific data (SD)',
        scope: DataScope.ALL,
      },
      {
        name: 'Fledermaus scientific data scene (SCENE)',
        value: 'Proprietary format | Fledermaus scientific data scene (SCENE)',
        scope: DataScope.ALL,
      },
      {
        name: 'JavaScript Object Notation (GeoJSON)',
        value: 'Open format | JavaScript Object Notation (GeoJSON)',
        scope: DataScope.ALL,
      },
      {
        name: 'JavaScript Object Notation (JSON)',
        value: 'OGC Web Services | JavaScript Object Notation (JSON)',
        scope: DataScope.ALL,
      },
      {
        name: 'Joint Photographic Experts Group (JPEG)',
        value: 'Open format | Joint Photographic Experts Group (JPEG)',
        scope: DataScope.ALL,
      },
      {
        name: 'Joint Photographic Experts Group 2000 (JPEG2000)',
        value: 'Open format | Joint Photographic Experts Group 2000 (JPEG2000)',
        scope: DataScope.ALL,
      },
      {
        name: 'Keyhole Markup Language (KML)',
        value: 'Open format | Keyhole Markup Language (KML)',
        scope: DataScope.ALL,
      },
      {
        name: 'Keyhole Markup Language Zipped (KMZ)',
        value: 'Open format | Keyhole Markup Language Zipped (KMZ)',
        scope: DataScope.ALL,
      },
      {
        name: 'Lidar Data Exchange Format (LAS)',
        value: 'Open format | Lidar Data Exchange Format (LAS)',
        scope: DataScope.ALL,
      },
      {
        name: 'Lidar Data Exchange Format (LAZ)',
        value: 'Open format | Lidar Data Exchange Format (LAZ)',
        scope: DataScope.ALL,
      },
      {
        name: 'Lempel-Ziv and Welch (TIFF)',
        value: 'Compressed format | Lempel-Ziv and Welch (TIFF)',
        scope: DataScope.ALL,
      },
      { name: 'Many DAT formats (DAT)', value: 'Open format | Many DAT formats (DAT)', scope: DataScope.ALL },
      { name: 'Many XML formats (XML)', value: 'Open format | Many XML formats (XML)', scope: DataScope.ALL },
      { name: 'MapInfo (TAB)', value: 'Proprietary format | MapInfo (TAB)', scope: DataScope.ALL },
      { name: 'MapInfo MIF/MID (MIF)', value: 'Proprietary format | MapInfo MIF/MID (MIF)', scope: DataScope.ALL },
      {
        name: 'Microsoft Office Pipe Separated Values file format (PSV)',
        value: 'Open format | Microsoft Office Pipe Separated Values file format (PSV)',
        scope: DataScope.ALL,
      },
      {
        name: 'Multi-resolution Seamless Image Database (MrSID)',
        value: 'Compressed format | Multi-resolution Seamless Image Database (MrSID)',
        scope: DataScope.ALL,
      },
      {
        name: 'National Transfer Format - OS (NTF)',
        value: 'Open format | National Transfer Format - OS (NTF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Open Document Presentation (ODP)',
        value: 'Open format | Open Document Presentation (ODP)',
        scope: DataScope.ALL,
      },
      {
        name: 'Open Document Spreadsheet (ODS)',
        value: 'Open format | Open Document Spreadsheet (ODS)',
        scope: DataScope.ALL,
      },
      { name: 'Open Document Text (ODT)', value: 'Open format | Open Document Text (ODT)', scope: DataScope.ALL },
      {
        name: 'Outlook File Template (OFT)',
        value: 'Proprietary format | Outlook File Template (OFT)',
        scope: DataScope.ALL,
      },
      { name: 'Packbit (TIFF)', value: 'Compressed format | Packbit (TIFF)', scope: DataScope.ALL },
      {
        name: 'Portable Document Format - 3D (PDF)',
        value: 'Open format | Portable Document Format - 3D (PDF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Portable Document Format - GeoReferenced (PDF)',
        value: 'Open format | Portable Document Format - GeoReferenced (PDF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Portable Document Format - Standardized (PDF)',
        value: 'Open format | Portable Document Format - Standardized (PDF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Portable Document Format - Unreferenced (PDF)',
        value: 'Open format | Portable Document Format - Unreferenced (PDF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Portable Network Graphic (PNG)',
        value: 'Open format | Portable Network Graphic (PNG)',
        scope: DataScope.ALL,
      },
      {
        name: 'Resource Description Framework (RDF)',
        value: 'Open format | Resource Description Framework (RDF)',
        scope: DataScope.ALL,
      },
      {
        name: 'Resource Description Framework (XML)',
        value: 'Open format | Resource Description Framework (XML)',
        scope: DataScope.ALL,
      },
      { name: 'Rich Text Format (RTF)', value: 'Open format | Rich Text Format (RTF)', scope: DataScope.ALL },
      {
        name: 'Tab Separated Values (TSV)',
        value: 'Proprietary format | Tab Separated Values (TSV)',
        scope: DataScope.ALL,
      },
      {
        name: 'Tagged Image File Format (TIFF)',
        value: 'Open format | Tagged Image File Format (TIFF)',
        scope: DataScope.ALL,
      },
      { name: 'Apache Parquet (PARQUET)', value: 'Open format | Apache Parquet (PARQUET)', scope: DataScope.ALL },
      {
        name: 'FASTQ Biological Sequence File (FASTQ)',
        value: 'Open format | FASTQ Biological Sequence File (FASTQ)',
        scope: DataScope.ALL,
      },
      {
        name: 'FASTA Biological Sequence File (FASTA)',
        value: 'Open format | FASTA Biological Sequence File (FASTA)',
        scope: DataScope.ALL,
      },
      {
        name: 'Free Lossless Audio Codec (FLAC)',
        value: 'Open format | Free Lossless Audio Codec (FLAC)',
        scope: DataScope.ALL,
      },
      { name: 'MPEG Audio Layer 3 (MP3)', value: 'Open format | MPEG Audio Layer 3 (MP3)', scope: DataScope.ALL },
      { name: 'R Script File (R)', value: 'Open format | R Script File (R)', scope: DataScope.ALL },
      {
        name: 'Audio Video Interleave (AVI)',
        value: 'Proprietary format | Audio Video Interleave (AVI)',
        scope: DataScope.ALL,
      },
      {
        name: 'Enhanced Compression Wavelet (ECW)',
        value: 'Proprietary format | Enhanced Compression Wavelet (ECW)',
        scope: DataScope.ALL,
      },
      { name: 'ESRI Layer (LYR)', value: 'Proprietary format | ESRI Layer (LYR)', scope: DataScope.ALL },
      { name: 'ESRI Layer (LYRX)', value: 'Proprietary format | ESRI Layer (LYRX)', scope: DataScope.ALL },
      { name: 'MPEG-4 Video file (MP4)', value: 'Proprietary format | MPEG-4 Video file (MP4)', scope: DataScope.ALL },
      {
        name: 'QuickTime File Format (MOV)',
        value: 'Proprietary format | QuickTime File Format (MOV)',
        scope: DataScope.ALL,
      },
      {
        name: 'Waveform Audio File Format (WAV)',
        value: 'Proprietary format | Waveform Audio File Format (WAV)',
        scope: DataScope.ALL,
      },
      { name: 'QIIME Zipped Artifact (QZA)', value: 'Open format | QIIME Zipped Artifact (QZA)', scope: DataScope.ALL },
      {
        name: 'Biological Observation Matrix (BIOM)',
        value: 'Open format | Biological Observation Matrix (BIOM)',
        scope: DataScope.ALL,
      },
      { name: 'GNU zip archive (GZIP)', value: 'Open format | GNU zip archive (GZIP)', scope: DataScope.ALL },
      {
        name: 'Compressed tape archive (TAR.GZ)',
        value: 'Open format | Compressed tape archive (TAR.GZ)',
        scope: DataScope.ALL,
      },
      {
        name: 'ESRI File based Geodatabase (GDB)',
        value: 'Proprietary format | ESRI File based Geodatabase (GDB)',
        scope: DataScope.ALL,
      },
      { name: 'MS Excel (XLS)', value: 'Proprietary format | MS Excel (XLS)', scope: DataScope.ALL },
      {
        name: 'City GML (CiCompressedtygml)',
        value: 'Open format | City GML (CiCompressedtygml)',
        scope: DataScope.ALL,
      },
    ],
  },
];
