import { RequestQuery } from '@hapi/hapi';

import { BASE_PATH, webRoutePaths } from './constants';
import { readQueryParams } from './queryStringHelper';

export const filterNames = {
  scope: 'scope',
  retiredAndArchived: 'retired-archived',
  keywords: 'keywords',
  licence: 'licence',
  updatedBefore: {
    day: 'before-day',
    month: 'before-month',
    year: 'before-year',
  },
  updatedAfter: {
    day: 'after-day',
    month: 'after-month',
    year: 'after-year',
  },
};

export enum DataScopeValues {
  All = 'all',
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
  keywords: string;
  license: string;
  lastUpdated: {
    before: {
      day: string;
      month: string;
      year: string;
    };
    after: {
      day: string;
      month: string;
      year: string;
    };
  };
  retiredAndArchived: boolean;
}

export const buildFilterResetUrl = (requestQuery: RequestQuery): string => {
  const nceaOnly = readQueryParams(requestQuery, filterNames.scope) === DataScopeValues.NCEA;

  const params: string = nceaOnly ? `${filterNames.scope}=${DataScopeValues.NCEA}` : '';

  return `${BASE_PATH}${webRoutePaths.results}?${params}`;
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
        hasNCEAData: true,
      },
      {
        name: 'Animal & Plant Health Agency',
        value: 'apha',
        hasNCEAData: true,
      },
      {
        name: 'Centre for Environment, Fisheries & Aquaculture Science',
        value: 'cefas',
        hasNCEAData: true,
      },
      {
        name: 'Department for Environment, Food & Rural Affairs',
        value: 'defra',
        hasNCEAData: true,
      },
      {
        name: 'Environment Agency',
        value: 'ea',
        hasNCEAData: false,
      },
      {
        name: 'Forestry Commission',
        value: 'fc',
        hasNCEAData: false,
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
        hasNCEAData: false,
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
        name: 'MS Excel',
        value: 'xls',
      },
      {
        name: 'MS Excel',
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
