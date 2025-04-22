export interface IBaseItem {
  id: string;
  title: string;
  publishedBy?: string;
  content: string;
  studyPeriodStart?: string;
  studyPeriodEnd?: string;
  startYear?: string;
  toYear?: string;
  resourceLocator: string;
  organisationName?: string;
  resourceType?: string[];
  abstract?: string;
  displayDataSetReferenceDate?: boolean;
  dataSetReferenceDate?: string;
  dataSetReferenceLabel?: string;
}

export interface IGeneralItem {
  alternateTitle?: string;
  topicCategories?: string[];
  language?: string;
  keywords?: string[];
  abstract?: string;
  temporalExtent?: ITemporalExtent;
  resources?: IResources[];
}

export interface IIdentifiers {
  id?: string;
}

export interface IAccessItem {
  id?: string;
  contacts?: Contact[];
  metadata?: IMetaData;
  identifiers?: IIdentifiers[];
  resourceType?: string;
  resources?: IResources[] | undefined;
}

export interface IAccess {
  ncea_catalogue_number?: string;
  host_catalogue_number?: string;
  host_catalogue_entry?: string;
  resource_type_and_hierarchy?: string;
  contact_information?: string;
  catalogue_number?: string;
  resource_locators?: string;
  host_service_catalogue_number?: string;
  ncea_group_reference?: string;
  metadata_standard?: string;
  project_number?: string;
  metadata_language?: string;
  ncea_catalogue_entry?: string;
  resourceWebsite?: string;
}

export interface Contact {
  name?: string;
  email?: string;
  phone: undefined | null | string;
  address: undefined | null | string;
  url: undefined | null | string;
  delivery: undefined | null | string;
  country: undefined | null | string;
  city: undefined | null | string;
  postcode: undefined | null | string;
  aministrativeArea: undefined | null | string;
  organisation?: string;
  role?: string;
}

export interface ILicense {
  limitation_on_public_access?: string;
  limitation_on_public_access_otherconstraint?: string;
  conditions_for_access_and_use_useConstraints?: string;
  conditions_for_access_and_useOtherConstraints?: string;
  other_constraint?: string;
  available_formats?: string | string[];
  frequency_of_update?: string;
  character_encoding?: string;
}

export interface ILicenseItem {
  publicAccessAccessContraints?: string[];
  publicAccessOtherConstraints?: string[];
  publicUseUseConstraints?: string | undefined | null;
  publicUseOtherContraints?: string | undefined | null;
  frequencyOfUpdate?: string;
}

export interface IGovernance {
  tab?: string;
  role?: string;
  organization_name?: string;
  individual_name?: string;
  position_name?: string;
  telephone_number?: string;
  delivery_point?: string;
  postal_code?: string;
  city?: string;
  administrative_area?: string;
  country?: string;
  web_address?: string;
  email?: string;
}

export interface IRecordDates {
  publication?: string;
  creation?: string;
  revision?: string;
  metadata?: null | undefined | string;
}

export interface IQualityItem {
  metadataDate?: string;
  lineage?: string;
  additionalInformation?: null | undefined | string;
  datasetReferenceDate: IDataSetReferenceDate;
}

export interface IQuality {
  publicationInformation?: string;
  creationInformation?: string;
  revisionInformation?: string;
  metadataDate?: string;
  conformity?: string;
  additionalInformation?: string;
  lineage?: string;
}

export type IVertex = [number, number];

export interface ICoordinates {
  coordinates: IVertex[][];
}

export interface IAccumulatedCoordinates {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface IAccumulatedCoordinatesWithCenter {
  coordinates: IAccumulatedCoordinates;
  center: string;
}

export interface ISpatial {
  dataService?: string;
  representationService?: string;
  referencingSystem?: string;
}

export interface IGeography {
  spatialDataService?: string;
  spatialRepresentationService?: string;
  spatialReferencingSystem?: string;
  geographicLocations?: string;
  geographicBoundary?: IAccumulatedCoordinates | string;
  geographicBoundaryHtml?: string;
  geographicCenter?: string;
  geographicMarkers?: string;
  verticalExtent?: string;
  samplingResolution?: string;
}

export interface INatural {
  Natural_capital_title?: string;
  Natural_capital_description?: string;
  Natural_capital_displayData?: string;
  Natural_capital_no_data?: string;
  Natural_capital_glossary_link?: string;
}

export type IOtherSearchItem = IGeneralItem &
  IAccessItem &
  INatural &
  IQualityItem &
  ILicense &
  IGeographyItem &
  IGovernance;

export interface ISearchItem extends IBaseItem {
  [key: string]: IGovernance | string | number | undefined | boolean | string[] | IAccumulatedCoordinates;
}

export interface TabbedItem {
  tab?: string;
}

export interface ISearchResults {
  total: number;
  items: ISearchItem[];
  hasSpatialData: boolean;
}

export interface ITemporalExtent {
  beginPosition: string;
  endPosition: string;
}
export interface IGeometry {
  westBoundLongitude: number;
  eastBoundLongitude: number;
  southBoundLatitude: number;
  northBoundLatitude: number;
}

export interface IResource {
  url: string;
  availableLanguages: string[];
}

interface IDataSetReferenceDate {
  publication?: string;
  creation: string;
  revision: string;
  metadata?: null | undefined | string;
}

export interface ISearchResult {
  searchScore: number;
  id: string;
  dataset: string;
  datasetType: string;
  ingestedDateTime: string;
  content: string;
  title: string;
  alternativeTitle: string;
  abstract: string;
  resourceType: string;
  topicCategory: string;
  keywords: string[];
  lineage: string;
  additionalInformationSource: string;
  temporalExtent: ITemporalExtent;
  mapping?: IGeometry;
  resource?: IResource;
  organisation?: string;
  nceaContribution: string;
  datasetReferenceDate: IDataSetReferenceDate;
}

export interface ISearchResponse {
  results: ISearchResult[];
  totalDocumentCount: number;
}

export interface IAggregationOption {
  value: string;
  text: string;
  selected?: boolean;
  checked?: boolean;
}

export interface IAggregationOptions {
  [key: string]: IAggregationOption[] | [];
}

export interface IOrganisationDetails {
  organisationValue: string;
  role: string;
  email: string;
}

export interface IDateRange {
  start?: { date?: string };
  end?: { date?: string };
}

export interface IMetaData {
  standard?: string;
  language?: string;
}

export interface IResources {
  url: string;
  type: string;
  name: string;
  distributionFormat?: undefined | null | [string];
}
interface SpatialItem {
  dataService?: string;
  representationService?: string;
  referencingSystem?: string;
}
export interface IGeographyBoundry {
  bboxEastLong?: number;
  bboxWestLong?: number;
  bboxSouthLat?: number;
  bboxNorthLat?: number;
}

export interface IGeographyItem {
  verticalExtent?: string | undefined | null;
  spatial: SpatialItem;
  boundingBox?: IGeographyBoundry;
  geographicLocations?: string | undefined | null;
}

export interface INaturalItem {
  title?: string;
  abstract?: string;
  nceaClassfiers?: NceaClassifier;
}

export interface IMoreInfoSearchItem extends IGeographyItem, IQualityItem, IGeneralItem, IAccessItem {
  id?: string;
  title?: string;
  resources: IResources[];
  temporalExtent: ITemporalExtent;
  license: ILicenseItem;
  organisation?: string;
  nceaContribution: string;
}

export interface NaturalCapitalSubCategory {
  id?: string;
  name?: string;
}

export interface NaturalCapitalCategory {
  id?: string;
  name?: string;
  naturalCapitalSubCategory?: NaturalCapitalSubCategory[] | null | undefined;
}

export interface NaturalCapitalTableItems {
  id?: string;
  name?: string;
  naturalCapitalCategory?: NaturalCapitalCategory[] | null | undefined;
}

export interface SubCategory {
  code: string;
  name: string;
  level: number;
}

export interface Category {
  code: string;
  name: string;
  level: number;
  classifiers?: SubCategory[];
}

export interface NaturalCapitalTheme {
  code: string;
  name: string;
  level: number;
  classifiers?: Category[];
}

export interface OutputSubCategory {
  id: string;
  name: string;
}

export interface OutputCategory {
  id: string;
  name: string;
  naturalCapitalSubCategory: OutputSubCategory[];
}

export interface OutputTheme {
  id: string;
  name: string;
  naturalCapitalCategory: OutputCategory[];
}

export interface NceaClassifier {
  naturalCapitalTheme: string[];
  naturalCapitalCategory: string[];
  naturalCapitalSubCategory: string[];
}

export interface ServiceOptions {
  [key: string]: string;
}
