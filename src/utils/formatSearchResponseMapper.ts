import { formatDate } from './dates';
import { Contact, IGeographyItem, IGovernance } from '../interfaces/searchResponse.interface';
import { getResourceLanguages } from '../utils/getGeneralTabData';
import { generateConformityData } from '../utils/getQualityTabData';

const getResourceLocatorURL = (data: string | string[]): string => {
  if (Array.isArray(data) && data.length) {
    return data[0] as string;
  }
  return data as string;
};

const getContactInformation = (contacts): string => {
  const contactInformationArray: string[] = [];

  if (contacts.length > 0) {
    contacts.forEach((contact: Contact) => {
      const contactInfo = contact.email
        ? `${contact.organisationName} :- ${contact.email}`
        : `${contact.organisationName}`;
      contactInformationArray.push(contactInfo);
    });
  }

  if (contactInformationArray.length === 0) {
    return 'Find contact information on the Governance tab';
  } else {
    return contactInformationArray.join(', <br />');
  }
};

const getRecordsDates = (data: string): string => {
  if (data) {
    return formatDate(data, false, false);
  }
  return '';
};

const getGeneralTabData = (payload) => {
  return {
    content: payload?.abstract ?? '',
    studyPeriod: '', // TO DO
    topicCategories: payload?.topicCategories.join(', ') ?? '',
    keywords: payload?.keywords.join(', ') ?? '',
    language: getResourceLanguages(payload?.resource),
  };
};

const getAccessTabData = (payload) => {
  return {
    ncea_catalogue_entry: payload?.identifiers?.catalogue?.entry ?? '',
    host_catalogue_number: '', // TO DO
    host_catalogue_entry: '', // TO DO
    resource_type_and_hierarchy: '', // TO DO
    resource_locators: '', // TO DO
    contact_information: getContactInformation(payload.contacts),
    catalogue_number: payload?.identifiers?.catalogue?.number ?? '',
    metadata_language: payload?.metadata?.language ?? '',
  };
};

const getQualityTabData = (payload) => {
  return {
    publicationInformation: getRecordsDates(payload?.recordDates?.publification),
    creationInformation: getRecordsDates(payload?.recordDates?.creation),
    revisionInformation: getRecordsDates(payload?.recordDates?.revision),
    metadataDate: getRecordsDates(payload?.recordDates?.metadata),
    lineage: payload?.lineage ?? '',
    conformity: generateConformityData(payload?.conformity ?? []),
    additionalInformation: payload?.additionalInformation ?? '',
  };
};

const getLicenseTabData = (payload) => {
  return {
    limitation_on_public_access: payload?.license?.publicAccessAccessContraints ?? '',
    limitation_on_public_access_otherconstraint: payload?.license?.publicAccessOtherConstraints ?? '',
    conditions_for_access_and_use_useConstraints: payload?.license?.publicUseUseConstraints ?? '',
    conditions_for_access_and_useOtherConstraints: payload?.license?.publicUseOtherContraints ?? '',
    other_constraint: '', // TO DO
    available_formats: '', // TO DO,
    frequency_of_update: payload?.license?.frequencyOfUpdate ?? '',
    character_encoding: 'utf8',
  };
};

const getNaturalTab = (payload) => {
  return {
    Natural_capital_title: payload?.title ?? '', // To Do data is coming from the cinstant file naturalTabStaticData
    Natural_capital_description: '', // To Do data is coming from the cinstant file naturalTabStaticData
    Natural_capital_displayData: [], // Need to discuss as per the current implementations need to check its payload
    Natural_capital_no_data: '', // To Do data is coming from the cinstant file naturalTabStaticData
    Natural_capital_glossary_link: '', // To Do data is coming from the cinstant file naturalTabStaticData
  };
};

const getGovernanceTabData = (payload) => {
  const contacts = payload?.contacts;
  const governanceData: IGovernance[] = contacts?.map((contact) => ({
    tab: 'governance',
    role: contact.role || '',
    organization_name: contact.name?.trim() || '',
    individual_name: '', // To Do
    position_name: '', // TO DO
    telephone_number: contact.phone || '',
    delivery_point: contact.delivery || '',
    postal_code: contact.postCode || '',
    city: contact.city || '',
    administrative_area: contact.aministrativeArea || '',
    country: contact.country || '',
    web_address: '', // TO DO
    email: contact.email || '',
  }));
  return governanceData;
};

const getGeographyTabData = (payload): IGeographyItem => {
  //   const coordinatesData: IAccumulatedCoordinatesWithCenter | null = getAccumulatedCoordinatesNCenter(
  //     payload?.geographicBoundary ?? {},
  //   );
  return {
    spatialDataService: payload?.spatial?.dataService ?? '',
    spatialRepresentationService: payload?.spatial?.representationService ?? '',
    spatialReferencingSystem: payload?.spatial?.representationService ?? '',
    geographicLocations: '', // To Do its key is there but there is no data in new UI mock up
    geographicBoundary: '', // To do data structure is mismatched with the new data mock
    geographicBoundaryHtml: '', // To do data structure is mismatched with the new data mock
    geographicCenter: '0,0', // To do data structure is mismatched with the new data mock
    geographicMarkers: '', // TO DO No key exists in the mockup data
    verticalExtent: payload?.verticalExtent ?? '',
    samplingResolution: '', // TO DO no data exists in the mock data
  };
};
const formatSearchResponseMapper = (payload) => {
  const resourceLocator = getResourceLocatorURL(payload?.resource?.locators ?? '');
  const generalTabData = getGeneralTabData(payload);
  const accessTabData = getAccessTabData(payload);
  const qualityTabData = getQualityTabData(payload);
  return {
    id: payload?.id,
    title: payload?.title ?? '',
    publishedBy: '', // TO
    startYear: '', // TO
    toYear: '', // TO DO
    resourceLocator,
    organisationName: '', // TO DO
    ncea_group_reference: '', // TO DO
    metadata_standard: '', // TO DO
    project_number: payload?.projectNumber ?? '',
    ...generalTabData,
    ...accessTabData,
    ...qualityTabData,
    ...getLicenseTabData(payload),
    ...getNaturalTab(payload),
    ...getGovernanceTabData(payload),
    ...getGeographyTabData(payload),
  };
};

export { formatSearchResponseMapper };
