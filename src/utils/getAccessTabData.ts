/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { capitalizeWords } from './formatAggregationResponse';
import { getOrganisationDetails } from './getOrganisationDetails';
import { Contact, IAccess, IAccessItem, IIdentifiers } from '../interfaces/searchResponse.interface';

const getCoupledResource = (data: string | string[]): string => {
  const getCoupleResourceLink = (url: string): string => {
    const cleanedString: string = url.replace(/\\(.)/g, '$1');
    return `<a class="govuk-link" href="${decodeURIComponent(cleanedString)}" target="_blank">${decodeURIComponent(cleanedString)}</a>`;
  };
  if ((typeof data === 'string' && data.length === 0) || (Array.isArray(data) && data.length === 0)) {
    return '';
  }
  const coupleResourceUrl: string[] = [];
  if (Array.isArray(data) && data.length) {
    data.forEach((resourceUrl: string) => {
      coupleResourceUrl.push(getCoupleResourceLink(resourceUrl));
    });
  } else {
    coupleResourceUrl.push(getCoupleResourceLink(data as string));
  }
  return coupleResourceUrl.join('\n');
};

const getResourceLocators = (searchItem: Record<string, any>): string => {
  const linkDataObject: Record<string, any>[] = searchItem?._source?.link ?? [];
  const resourceLocatorStrings: string[] = [];
  let resourceLocatorString: string = '';
  if (Array.isArray(linkDataObject) && linkDataObject.length) {
    linkDataObject.forEach((linkData: Record<string, any>) => {
      let resLocStr: string = '';
      const urlData: string = linkData?.urlObject?.default ?? '';
      const nameData: string = linkData?.nameObject?.default ?? '';
      const funcData: string = linkData?.function ?? '';
      const descriptionData: string = linkData?.descriptionObject?.default ?? '';
      if (urlData) {
        resLocStr += '<p>';
        resLocStr += funcData ? `${capitalizeWords(funcData)} from ` : '';
        resLocStr += nameData ? `${nameData} (` : '';
        resLocStr += `<a class="govuk-link" href="${urlData}" target="_blank">${urlData}</a>`;
        resLocStr += nameData ? `)` : '';
        resLocStr += descriptionData ? `: ${descriptionData}` : '';
        resLocStr += '</p>';
        resourceLocatorStrings.push(resLocStr);
      }
    });
  }
  resourceLocatorString = resourceLocatorStrings.join('\n');
  if (resourceLocatorString === '') {
    const { organisationValue, email } = getOrganisationDetails(searchItem?._source, true);
    if (organisationValue && email) {
      resourceLocatorString = `Contact organisation for Resource locator information`;
    }
  }
  return resourceLocatorString;
};

const getContactInformation = (contacts): string => {
  const contactInformationArray: string[] = [];

  if (contacts.length > 0) {
    contacts.forEach((contact: Contact) => {
      const contactInfo = contact.email
        ? `${contact.organisationName ?? ''} :- ${contact.email}`
        : `${contact.organisationName ?? ''}`;
      contactInformationArray.push(contactInfo);
    });
  }

  if (contactInformationArray.length === 0) {
    return 'Find contact information on the Governance tab';
  } else {
    return contactInformationArray.join(', <br />');
  }
};

const getIdentifiers = (identifier: IIdentifiers[]) => {
  if (Array.isArray(identifier)) {
    const identifierObj = Object.assign({}, ...identifier);
    return identifierObj.id ?? '';
  }
  return '';
};

const getAccessTabData = (payload: IAccessItem): IAccess => ({
  ncea_catalogue_number: payload.id ?? '', // file identifier
  host_catalogue_number: getIdentifiers(payload.identifiers ?? []), // resource identifier
  host_catalogue_entry: '',
  resource_type_and_hierarchy: payload?.resourceType ?? '',
  resource_locators: '', // keeps as empty as its value is not available from AGM side
  contact_information: getContactInformation(payload.contacts),
  catalogue_number: '',
  metadata_standard: payload?.metadata?.standard ?? '',
  metadata_language: payload?.metadata?.language?.toUpperCase() ?? '',
});

export { getAccessTabData, getResourceLocators, getCoupledResource, getContactInformation };
