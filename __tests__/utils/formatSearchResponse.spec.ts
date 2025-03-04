import { formatSearchResponse } from '../../src/utils/formatSearchResponse';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('Format the search response', () => {
  it('should format the search response correctly', async () => {
    const result = await formatSearchResponse(MORE_INFO_MOCK_DATA);
    const expectedResponse = {
      '0': {
        tab: 'governance',
        role: 'pointOfContact',
        organization_name: '',
        individual_name: 'Jonathan Smith',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'jonathan.smith@apha.gov.uk',
      },
      '1': {
        tab: 'governance',
        role: 'custodian',
        organization_name: '',
        individual_name: 'Neil Sampson',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'neil.sampson@apha.gov.uk',
      },
      '2': {
        tab: 'governance',
        role: 'publisher',
        organization_name: '',
        individual_name: 'APHA OpenData Team',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'aphaopendata@apha.gov.uk',
      },
      id: 'c9d7e118-d057-48f9-b520-76de8e51e014',
      title: 'Exotic Notifible Disease Report Case Reason for Submission Vocabulary',
      publishedBy: '',
      startYear: '2008',
      toYear: '2015',
      resourceLocator: 'http://www',
      organisationName: '',
      ncea_group_reference: '',
      project_number: '',
      content:
        "This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted  that resulted an Exotic Notifiable Disease investigations carried out by the Animal and Plant Health Agency. Investigations that follow the report of an exotic notifiable disease are called 'report cases'. Notifiable diseases in this context are animal diseases that an animal owner/keeper is under legal obligation to report to the Animal and Plant Health Agency (APHA), even if there is only a suspicion that an animal may be affected. 'Exotic diseases' are defined as diseases that are not currently present within the United Kingdom. Reason for Submission is the reason why a sample resulting in Non Negative Lab Result was submitted this could be a result of: \n" +
        'Active Surveillance These are investigations where a surveillance program is in place that actively samples certain premises in order to provide assurance of national disease freedom.  \n' +
        'Testing to Exclude: Testing for exclusion is specifically intended for use in cases where NAD or West Nile Fever is not formally suspected, but cannot be excluded from the differential diagnosis of a health or production problem. This service may help to detect disease at the earliest opportunity in those cases where the clinical signs do not give rise to a level of suspicion of a NAD or West Nile Fever that justifies either a consultation case or a statutory notification and official inquiry in the first instance. For more information on testing for exclusion scheme for NAD please see http://ahvla.defra.gov.uk/documents/nad/vr-534.3.full_.pdf  \n' +
        'Pre Export: Samples submitted as part of import controls\n' +
        'Post Import: Samples submitted as part of import controls\n' +
        'Private Samples: Samples collected for private diagnostic work\n' +
        'Pre Breeding: Samples submitted before an animal breeds\n' +
        'Not Disclosed: Samples which are submitted for undeclared reason.',
      studyPeriod: '1 January 2008 to 31 December 2015',
      topicCategories: 'environment',
      keywords: 'surveillance, animal disease',
      language: 'ENG',
      host_catalogue_entry: '',
      resource_type_and_hierarchy: '',
      resource_locators: '',
      contact_information:
        ' :- jonathan.smith@apha.gov.uk, <br /> :- neil.sampson@apha.gov.uk, <br /> :- aphaopendata@apha.gov.uk',
      catalogue_number: '',
      metadata_language: 'ENG',
      publicationInformation: '11 February 2017',
      creationInformation: '10 March 2023',
      revisionInformation: '10 June 2024',
      metadataDate: '',
      lineage: 'An RDF Vocabulary to described data on exotic notifiable disease investigations.',
      conformity: '',
      additionalInformation: '',
      limitation_on_public_access: 'otherRestrictions<br>license<br>copyright',
      limitation_on_public_access_otherconstraint: 'Open Government Licence<br>©Crown Copyright, APHA 2016',
      conditions_for_access_and_use_useConstraints: '',
      conditions_for_access_and_useOtherConstraints: '',
      other_constraint: '',
      available_formats: '',
      frequency_of_update: 'unknown',
      character_encoding: 'utf8',
      Natural_capital_title: 'Exotic Notifible Disease Report Case Reason for Submission Vocabulary',
      Natural_capital_description:
        "This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted  that resulted an Exotic Notifiable Disease investigations carried out by the Animal and Plant Health Agency. Investigations that follow the report of an exotic notifiable disease are called 'report cases'. Notifiable diseases in this context are animal diseases that an animal owner/keeper is under legal obligation to report to the Animal and Plant Health Agency (APHA), even if there is only a suspicion that an animal may be affected. 'Exotic diseases' are defined as diseases that are not currently present within the United Kingdom. Reason for Submission is the reason why a sample resulting in Non Negative Lab Result was submitted this could be a result of: \n" +
        'Active Surveillance These are investigations where a surveillance program is in place that actively samples certain premises in order to provide assurance of national disease freedom.  \n' +
        'Testing to Exclude: Testing for exclusion is specifically intended for use in cases where NAD or West Nile Fever is not formally suspected, but cannot be excluded from the differential diagnosis of a health or production problem. This service may help to detect disease at the earliest opportunity in those cases where the clinical signs do not give rise to a level of suspicion of a NAD or West Nile Fever that justifies either a consultation case or a statutory notification and official inquiry in the first instance. For more information on testing for exclusion scheme for NAD please see http://ahvla.defra.gov.uk/documents/nad/vr-534.3.full_.pdf  \n' +
        'Pre Export: Samples submitted as part of import controls\n' +
        'Post Import: Samples submitted as part of import controls\n' +
        'Private Samples: Samples collected for private diagnostic work\n' +
        'Pre Breeding: Samples submitted before an animal breeds\n' +
        'Not Disclosed: Samples which are submitted for undeclared reason.',
      Natural_capital_displayData: '',
      Natural_capital_no_data: '',
      Natural_capital_glossary_link: '',
      spatialDataService: '',
      spatialRepresentationService: 'vector',
      spatialReferencingSystem: 'http://www.opengis.net/def/crs/EPSG/0/27700',
      geographicLocations: '',
      geographicBoundary: { north: 58.7, south: -50, east: 1.7, west: -6.2 },
      geographicBoundaryHtml:
        '<p>West bounding longitude: <span id="west">-6.2</span></p><p>East bounding longitude: <span id="east">1.7</span></p><p>North bounding latitude: <span id="north">58.7</span></p><p>South bounding latitude: <span id="south">-50</span></p>',
      geographicCenter: '-2.25,4.350000000000001',
      geographicMarkers: '',
      verticalExtent: '',
      samplingResolution: '',
      metadata_standard: 'Environment Agency Metadata Profile',
      ncea_catalogue_number: 'c9d7e118-d057-48f9-b520-76de8e51e014',
      host_catalogue_number: '17f1f7c2-0c92-4ec1-86ea-b4d67dbeb2cf',
    };
    expect(result).toEqual(expectedResponse);
  });
});
