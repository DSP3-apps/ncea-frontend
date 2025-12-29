import { estypes } from '@elastic/elasticsearch';
import { RequestQuery } from '@hapi/hapi';

import { BASE_PATH, FILTER_VALUES, webRoutePaths } from './constants';
import { convertToDate } from './dates';
import { getClearFilterUrl, readQueryParams } from './queryStringHelper';

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
  IGNORE = 'ignore',
}

interface ISearchFilterOption {
  name: string;
  value: string;
  scope: DataScope.NCEA | DataScope.ALL | DataScope.IGNORE;
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
  hasDSPFiltersRemoved: boolean;
  categories: ISearchFilterProcessed[];
  keywords: string[];
  licence: string;
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
  const params = getClearFilterUrl(requestQuery);

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

  if (filters.licence.length > 0) {
    results.hits = results.hits.filter((hit) => {
      // turn into a regex for case-insensitive match
      const rg = new RegExp(escapeRegExp(filters.licence), 'i');

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
    value: FILTER_VALUES.organisation,
    filters: [
      {
        name: 'Agriculture & Horticulture Development Board',
        value: 'Agriculture & Horticulture Development Board',
        scope: DataScope.ALL,
      },
      {
        name: 'Animal & Plant Health Agency',
        value: 'Animal & Plant Health Agency',
        scope: DataScope.ALL,
      },
      {
        name: 'Centre for Environment, Fisheries & Aquaculture Science',
        value: 'Centre for Environment, Fisheries & Aquaculture Science',
        scope: DataScope.ALL,
      },
      {
        name: 'Department for Environment, Food & Rural Affairs',
        value: 'Department for Environment, Food & Rural Affairs',
        scope: DataScope.ALL,
      },
      {
        name: 'Environment Agency',
        value: 'Environment Agency',
        scope: DataScope.NCEA,
      },
      {
        name: 'Forestry Commission',
        value: 'Forestry Commission',
        scope: DataScope.NCEA,
      },
      {
        name: 'Joint Nature Conservation Committee',
        value: 'Joint Nature Conservation Committee',
        scope: DataScope.ALL,
      },
      {
        name: 'KEW',
        value: 'KEW',
        scope: DataScope.ALL,
      },
      {
        name: 'Marine Management Organisation',
        value: 'Marine Management Organisation',
        scope: DataScope.ALL,
      },
      {
        name: 'Natural England',
        value: 'Natural England',
        scope: DataScope.NCEA,
      },
      {
        name: 'Rural Payments Agency',
        value: 'Rural Payments Agency',
        scope: DataScope.ALL,
      },
    ],
  },
  {
    name: 'Search Type',
    value: FILTER_VALUES.searchType,
    filters: [
      {
        name: 'Title',
        value: 'title',
        scope: DataScope.IGNORE,
      },
    ],
  },
  {
    name: 'Data Type',
    value: FILTER_VALUES.dataType,
    filters: [
      {
        name: 'Spatial',
        value: 'spatial',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Non-Spatial',
        value: 'non-spatial',
        scope: DataScope.IGNORE,
      },
    ],
  },
  {
    name: 'Service Type',
    value: FILTER_VALUES.serviceType,
    filters: [
      {
        name: 'HTTP File Download',
        value: 'HTTP File Download',
        scope: DataScope.IGNORE,
      },
      {
        name: 'HTTP Web Resource',
        value: 'HTTP Web Resource',
        scope: DataScope.IGNORE,
      },
      {
        name: 'HTTP Application',
        value: 'HTTP Application',
        scope: DataScope.IGNORE,
      },
      {
        name: 'FTP File Download',
        value: 'FTP File Download',
        scope: DataScope.IGNORE,
      },
      {
        name: 'WMS',
        value: 'WMS',
        scope: DataScope.IGNORE,
      },
      {
        name: 'WFS',
        value: 'WFS',
        scope: DataScope.IGNORE,
      },
      {
        name: 'WCS',
        value: 'WCS',
        scope: DataScope.IGNORE,
      },
      {
        name: 'ESRI REST API',
        value: 'ESRI REST API',
        scope: DataScope.IGNORE,
      },
      {
        name: 'OGC API Features',
        value: 'OGC API Features',
        scope: DataScope.IGNORE,
      },
      {
        name: 'REST API',
        value: 'REST API',
        scope: DataScope.IGNORE,
      },
      {
        name: 'SOAP API',
        value: 'SOAP API',
        scope: DataScope.IGNORE,
      },
    ],
  },
  {
    name: 'Data Format',
    value: FILTER_VALUES.dataFormat,
    filters: [
      {
        name: 'Comma Separated Values file (CSV)',
        value: 'Open format | Comma Separated Values file (CSV)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'MS Word 2010 onwards document (DOC)',
        value: 'Proprietary format | MS Word 2010 onwards document (DOC)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'MS Word 2010 onwards document (DOCX)',
        value: 'Proprietary format | MS Word 2010 onwards document (DOCX)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'ESRI, Intergraph, MS Access (MDB)',
        value: 'Proprietary format | ESRI, Intergraph, MS Access (MDB)',
        scope: DataScope.IGNORE,
      },
      { name: 'Shapefile (SHP)', value: 'Open format | Shapefile (SHP)', scope: DataScope.IGNORE },
      { name: 'Plain Text File (TXT)', value: 'Open Format | Plain Text File (TXT)', scope: DataScope.IGNORE },
      { name: 'MS Excel (XLSX)', value: 'Open format | MS Excel (XLSX)', scope: DataScope.IGNORE },
      {
        name: 'Access 2007 onwards database (ACCDB)',
        value: 'Proprietary format | Access 2007 onwards database (ACCDB)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Arc/Info Binary Grid (AIG)',
        value: 'Proprietary Format | Arc/Info Binary Grid (AIG)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Arc/Info ASCII Grid (AAIGrid)',
        value: 'Open format | Arc/Info ASCII Grid (AAIGrid)',
        scope: DataScope.IGNORE,
      },
      { name: 'ASCII Gridded XYZ (XYZ)', value: 'Open Format | ASCII Gridded XYZ (XYZ)', scope: DataScope.IGNORE },
      {
        name: 'ASCII Text Files (non-csv, non-xyz gridded, non-tab separated format)',
        value: 'Open Format | ASCII Text Files (non-csv, non-xyz gridded, non-tab separated format)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Bathymetric Attributed Grid (BAG)',
        value: 'Open Format | Bathymetric Attributed Grid (BAG)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'CAD Data eXchange Format (DXF)',
        value: 'Open format | CAD Data eXchange Format (DXF)',
        scope: DataScope.IGNORE,
      },
      { name: 'CAD Drawing file (DWG)', value: 'Proprietary format | CAD Drawing file (DWG)', scope: DataScope.IGNORE },
      {
        name: 'Catalogue Service for the Web (CSW)',
        value: 'OGC Web Services | Catalogue Service for the Web (CSW)',
        scope: DataScope.IGNORE,
      },
      { name: 'City GML (Citygml)', value: 'Open format | City GML (Citygml)', scope: DataScope.IGNORE },
      { name: 'dBASE (DBF)', value: 'Open format | dBASE (DBF)', scope: DataScope.IGNORE },
      { name: 'ER Mapper (ECW)', value: 'Proprietary format | ER Mapper (ECW)', scope: DataScope.IGNORE },
      { name: 'ERDAS IMAGINE (IMG)', value: 'Proprietary format | ERDAS IMAGINE (IMG)', scope: DataScope.IGNORE },
      { name: 'ERDASRaw (RAW)', value: 'Proprietary format | ERDASRaw (RAW)', scope: DataScope.IGNORE },
      {
        name: 'Generic Sensor Format (ALL)',
        value: 'Proprietary format | Generic Sensor Format (ALL)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Graphical Interchange Format (GIF)',
        value: 'Proprietary format | Graphical Interchange Format (GIF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Geo Tagged Image File Format (GeoTIFF)',
        value: 'Open format | Geo Tagged Image File Format (GeoTIFF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Geography Markup Language (GML)',
        value: 'Open format | Geography Markup Language (GML)',
        scope: DataScope.IGNORE,
      },
      { name: 'GeoPackage (GPKG)', value: 'Open format | GeoPackage (GPKG)', scope: DataScope.IGNORE },
      { name: 'GeoRSS (Geo)', value: 'Open format | GeoRSS (Geo)', scope: DataScope.IGNORE },
      { name: 'GPS Exchange Format (GPX)', value: 'Open format | GPS Exchange Format (GPX)', scope: DataScope.IGNORE },
      {
        name: 'Fledermaus scientific data (SD)',
        value: 'Proprietary format | Fledermaus scientific data (SD)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Fledermaus scientific data scene (SCENE)',
        value: 'Proprietary format | Fledermaus scientific data scene (SCENE)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'JavaScript Object Notation (GeoJSON)',
        value: 'Open format | JavaScript Object Notation (GeoJSON)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'JavaScript Object Notation (JSON)',
        value: 'OGC Web Services | JavaScript Object Notation (JSON)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Joint Photographic Experts Group (JPEG)',
        value: 'Open format | Joint Photographic Experts Group (JPEG)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Joint Photographic Experts Group 2000 (JPEG2000)',
        value: 'Open format | Joint Photographic Experts Group 2000 (JPEG2000)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Keyhole Markup Language (KML)',
        value: 'Open format | Keyhole Markup Language (KML)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Keyhole Markup Language Zipped (KMZ)',
        value: 'Open format | Keyhole Markup Language Zipped (KMZ)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Lidar Data Exchange Format (LAS)',
        value: 'Open format | Lidar Data Exchange Format (LAS)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Lidar Data Exchange Format (LAZ)',
        value: 'Open format | Lidar Data Exchange Format (LAZ)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Lempel-Ziv and Welch (TIFF)',
        value: 'Compressed format | Lempel-Ziv and Welch (TIFF)',
        scope: DataScope.IGNORE,
      },
      { name: 'Many DAT formats (DAT)', value: 'Open format | Many DAT formats (DAT)', scope: DataScope.IGNORE },
      { name: 'Many XML formats (XML)', value: 'Open format | Many XML formats (XML)', scope: DataScope.IGNORE },
      { name: 'MapInfo (TAB)', value: 'Proprietary format | MapInfo (TAB)', scope: DataScope.IGNORE },
      { name: 'MapInfo MIF/MID (MIF)', value: 'Proprietary format | MapInfo MIF/MID (MIF)', scope: DataScope.IGNORE },
      {
        name: 'Microsoft Office Pipe Separated Values file format (PSV)',
        value: 'Open format | Microsoft Office Pipe Separated Values file format (PSV)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Multi-resolution Seamless Image Database (MrSID)',
        value: 'Compressed format | Multi-resolution Seamless Image Database (MrSID)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'National Transfer Format - OS (NTF)',
        value: 'Open format | National Transfer Format - OS (NTF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Open Document Presentation (ODP)',
        value: 'Open format | Open Document Presentation (ODP)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Open Document Spreadsheet (ODS)',
        value: 'Open format | Open Document Spreadsheet (ODS)',
        scope: DataScope.IGNORE,
      },
      { name: 'Open Document Text (ODT)', value: 'Open format | Open Document Text (ODT)', scope: DataScope.IGNORE },
      {
        name: 'Outlook File Template (OFT)',
        value: 'Proprietary format | Outlook File Template (OFT)',
        scope: DataScope.IGNORE,
      },
      { name: 'Packbit (TIFF)', value: 'Compressed format | Packbit (TIFF)', scope: DataScope.IGNORE },
      {
        name: 'Portable Document Format - 3D (PDF)',
        value: 'Open format | Portable Document Format - 3D (PDF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Portable Document Format - GeoReferenced (PDF)',
        value: 'Open format | Portable Document Format - GeoReferenced (PDF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Portable Document Format - Standardized (PDF)',
        value: 'Open format | Portable Document Format - Standardized (PDF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Portable Document Format - Unreferenced (PDF)',
        value: 'Open format | Portable Document Format - Unreferenced (PDF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Portable Network Graphic (PNG)',
        value: 'Open format | Portable Network Graphic (PNG)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Resource Description Framework (RDF)',
        value: 'Open format | Resource Description Framework (RDF)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Resource Description Framework (XML)',
        value: 'Open format | Resource Description Framework (XML)',
        scope: DataScope.IGNORE,
      },
      { name: 'Rich Text Format (RTF)', value: 'Open format | Rich Text Format (RTF)', scope: DataScope.IGNORE },
      {
        name: 'Tab Separated Values (TSV)',
        value: 'Proprietary format | Tab Separated Values (TSV)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Tagged Image File Format (TIFF)',
        value: 'Open format | Tagged Image File Format (TIFF)',
        scope: DataScope.IGNORE,
      },
      { name: 'Apache Parquet (PARQUET)', value: 'Open format | Apache Parquet (PARQUET)', scope: DataScope.IGNORE },
      {
        name: 'FASTQ Biological Sequence File (FASTQ)',
        value: 'Open format | FASTQ Biological Sequence File (FASTQ)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'FASTA Biological Sequence File (FASTA)',
        value: 'Open format | FASTA Biological Sequence File (FASTA)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Free Lossless Audio Codec (FLAC)',
        value: 'Open format | Free Lossless Audio Codec (FLAC)',
        scope: DataScope.IGNORE,
      },
      { name: 'MPEG Audio Layer 3 (MP3)', value: 'Open format | MPEG Audio Layer 3 (MP3)', scope: DataScope.IGNORE },
      { name: 'R Script File (R)', value: 'Open format | R Script File (R)', scope: DataScope.IGNORE },
      {
        name: 'Audio Video Interleave (AVI)',
        value: 'Proprietary format | Audio Video Interleave (AVI)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Enhanced Compression Wavelet (ECW)',
        value: 'Proprietary format | Enhanced Compression Wavelet (ECW)',
        scope: DataScope.IGNORE,
      },
      { name: 'ESRI Layer (LYR)', value: 'Proprietary format | ESRI Layer (LYR)', scope: DataScope.IGNORE },
      { name: 'ESRI Layer (LYRX)', value: 'Proprietary format | ESRI Layer (LYRX)', scope: DataScope.IGNORE },
      {
        name: 'MPEG-4 Video file (MP4)',
        value: 'Proprietary format | MPEG-4 Video file (MP4)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'QuickTime File Format (MOV)',
        value: 'Proprietary format | QuickTime File Format (MOV)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Waveform Audio File Format (WAV)',
        value: 'Proprietary format | Waveform Audio File Format (WAV)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'QIIME Zipped Artifact (QZA)',
        value: 'Open format | QIIME Zipped Artifact (QZA)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'Biological Observation Matrix (BIOM)',
        value: 'Open format | Biological Observation Matrix (BIOM)',
        scope: DataScope.IGNORE,
      },
      { name: 'GNU zip archive (GZIP)', value: 'Open format | GNU zip archive (GZIP)', scope: DataScope.IGNORE },
      {
        name: 'Compressed tape archive (TAR.GZ)',
        value: 'Open format | Compressed tape archive (TAR.GZ)',
        scope: DataScope.IGNORE,
      },
      {
        name: 'ESRI File based Geodatabase (GDB)',
        value: 'Proprietary format | ESRI File based Geodatabase (GDB)',
        scope: DataScope.IGNORE,
      },
      { name: 'MS Excel (XLS)', value: 'Proprietary format | MS Excel (XLS)', scope: DataScope.IGNORE },
      {
        name: 'City GML (CiCompressedtygml)',
        value: 'Open format | City GML (CiCompressedtygml)',
        scope: DataScope.IGNORE,
      },
    ],
  },
];
