/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { DATA_DOWNLOADS_TYPES, DATA_SERVICES_TYPES } from './constants';
import { capitalizeWords } from './formatAggregationResponse';
import { getOrganisationDetails } from './getOrganisationDetails';
import { isEmpty } from './isEmpty';
import { Contact, IAccess, IAccessItem, IIdentifiers, IResources } from '../interfaces/searchResponse.interface';

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
        ? `${contact.organisation ?? ''} :- ${contact.email}`
        : `${contact.organisation ?? ''}`;
      contactInformationArray.push(contactInfo);
    });
  }

  if (contactInformationArray.length === 0) {
    // return 'Find contact information on the Governance tab';
    return '';
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

export const generateResourceWebsiteTable = (resources: IResources[]) => {
  if (Array.isArray(resources) && resources.length > 0) {
    const filterDataServicesSet = resources.filter(({ type }) => type !== null && DATA_SERVICES_TYPES.includes(type));
    const filterDataDownloadSet = resources.filter(({ type }) => type !== null && DATA_DOWNLOADS_TYPES.includes(type));
    const dataServicesTable = generateDataServicesTable(filterDataServicesSet);
    const dataDownloadTable = generateDataDownloadsTable(filterDataDownloadSet);

    return `${dataServicesTable}${dataDownloadTable}`;
  }
  return '';
};

const generateDataServicesTable = (dataServices: IResources[]) => {
  if (Array.isArray(dataServices) && dataServices.length > 0) {
    return `
    <table class="details-table-full">
    ${generateTableHeader()}
    <tbody>
      ${generateTableRows(dataServices, 'data-services')}
    </tbody>
  </table>`;
  }
  return '';
};

const generateDataDownloadsTable = (dataDownloads: IResources[]) => {
  if (Array.isArray(dataDownloads) && dataDownloads.length > 0) {
    return `
    <table class="details-table-full">
      ${generateFullDownloadsTableHeader()}
      <tbody>
        ${generateTableRows(dataDownloads, 'full-downloads')}
      </tbody>
    </table>`;
  }
  return '';
};

const generateFullDownloadsTableHeader = () => `
  <thead>
    <tr>
      <th width="74%">Full downloads and supporting documentation</th>
      <th width="15%">Format</th>
      <th width="20%">Action</th>
    </tr>
    <tr><td colspan="3" class="details-table-hr"></td></tr>
  </thead>
`;

const generateTableHeader = () => `
  <thead>
    <tr>
      <th width="74%">Data services and download area of interest</th>
      <th width="15%">Link</th>
      <th width="20%">Action</th>
    </tr>
    <tr><td colspan="3" class="details-table-hr"></td></tr>
  </thead>
`;

const generateTableRows = (resources: IResources[], datatType: string) => {
  return resources
    .map((item: IResources) => {
      const { name, url } = item;
      const rowHTML = datatType === 'full-downloads' ? createDownloadsTableRow(item) : createTableRow(name, url);

      return `
        ${rowHTML}
        <tr><td colspan="3" class="details-table-hr"></td></tr>
      `;
    })
    .join('');
};

export const extractFileFormat = (url: string | null) => {
  if (!isEmpty(url)) {
    const data = url?.split('.');
    return data?.[data.length - 1]?.toUpperCase() ?? 'N/A';
  }
  return 'N/A';
};

export const createDownloadsTableRow = (payload) => {
  const { distributionFormat, name, url } = payload;
  const dataSetName = isEmpty(name) ? 'N/A' : name;
  const fileType = isEmpty(distributionFormat) ? extractFileFormat(url) : distributionFormat[0].toString();

  if (isEmpty(url)) {
    return `
   <tr>
    <td>${dataSetName}</td>
    <td>${fileType}</td>
    <td>N/A</td>
  </tr>
  `;
  }
  return `
   <tr>
    <td>${dataSetName}</td>
    <td>${fileType}</td>
    <td>
      <a class="govuk-link" href="${url}" download>Download</a>
    </td>
  </tr>
  `;
};

const createTableRow = (name: string, url: string) => {
  const dataSetName = isEmpty(name) ? 'N/A' : name;
  if (isEmpty(url)) {
    return `
   <tr>
    <td>${dataSetName}</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  `;
  }
  return `
   <tr>
    <td>${dataSetName}</td>
    <td>
      <button
        id="copyLink"
        class="govuk-button copy-link-btn"
        value="${url}"
        data-module="govuk-button"
      >
        Copy Link
      </button>
    </td>
    <td>
      <a class="govuk-link" href="${url}" target="_blank">Open Link</a>
    </td>
  </tr>
  `;
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
  resourceWebsite: generateResourceWebsiteTable(payload.resources ?? []),
});

export { getAccessTabData, getResourceLocators, getCoupledResource, getContactInformation };
