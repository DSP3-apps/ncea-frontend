/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { DATA_DOWNLOADS_TYPES, DATA_SERVICES_TYPES } from './constants';
import { capitalizeWords } from './formatAggregationResponse';
import { getOrganisationDetails } from './getOrganisationDetails';
import { isEmpty } from './isEmpty';
import { Contact, IAccess, IAccessItem, IResources, ServiceOptions } from '../interfaces/searchResponse.interface';

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

// const getIdentifiers = (identifier: IIdentifiers[]) => {
//   if (Array.isArray(identifier)) {
//     const identifierObj = Object.assign({}, ...identifier);
//     return identifierObj.id ?? '';
//   }
//   return '';
// };

export const validateServiceTypes = (options: ServiceOptions, value: string): boolean => {
  const lowerCaseServiceTypes = Object.values(options).map((item) => item.toLowerCase());
  const lowerCaseServiceTypesSet = new Set(lowerCaseServiceTypes);

  return lowerCaseServiceTypesSet.has(value.toLowerCase());
};

export const validateDataSetServiceTypes = (options: ServiceOptions, value: string | null): boolean => {
  if (value == null) {
    return true;
  }
  const lowerCaseServiceTypes = Object.values(options).map((item) => item.toLowerCase());
  const lowerCaseServiceTypesSet = new Set(lowerCaseServiceTypes);

  return lowerCaseServiceTypesSet.has(value.toLowerCase());
};

export const generateResourceWebsiteTable = (resources: IResources[], recordId: string) => {
  if (Array.isArray(resources) && resources.length > 0) {
    const filterDataServicesSet = resources.filter(({ type }) =>
      validateDataSetServiceTypes(DATA_SERVICES_TYPES, type),
    );
    const filterDataDownloadSet = resources.filter(
      ({ type }) => type !== null && validateServiceTypes(DATA_DOWNLOADS_TYPES, type),
    );
    const dataServicesTable = generateDataServicesTable(filterDataServicesSet, recordId);
    const dataDownloadTable = generateDataDownloadsTable(filterDataDownloadSet, filterDataServicesSet, recordId);

    return `${dataServicesTable}${dataDownloadTable}`;
  }
  return '';
};

const generateDataServicesTable = (dataServices: IResources[], recordId: string) => {
  if (Array.isArray(dataServices) && dataServices.length > 0) {
    return `
    <table class="details-table-full">
    ${generateTableHeader()}
    <tbody>
      ${generateTableRows(dataServices, 'data-services', recordId)}
    </tbody>
  </table>`;
  }
  return '';
};

const generateDataDownloadsTable = (dataDownloads: IResources[], dataServices: IResources[], recordId: string) => {
  if (Array.isArray(dataDownloads) && dataDownloads.length > 0) {
    const style = dataServices.length > 0 ? 'style="margin-top:30px"' : '';
    return `
    <table class="details-table-full" ${style}>
      ${generateFullDownloadsTableHeader()}
      <tbody>
        ${generateTableRows(dataDownloads, 'full-downloads', recordId)}
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
    <tr aria-hidden="true" role="presentation"><td colspan="3" class="details-table-hr"></td></tr>
  </thead>
`;

const generateTableHeader = () => `
  <thead>
    <tr>
      <th width="74%">Data services and download area of interest</th>
      <th width="15%">Link</th>
      <th width="20%">Action</th>
    </tr>
    <tr aria-hidden="true" role="presentation"><td colspan="3" class="details-table-hr"></td></tr>
  </thead>
`;

const generateTableRows = (resources: IResources[], dataType: string, recordId: string) => {
  return resources
    .map((item: IResources) => {
      const { name, url } = item;
      const rowHTML =
        dataType === 'full-downloads' ? createDownloadsTableRow(item, recordId) : createTableRow(name, url, recordId);

      return `
        ${rowHTML}
        <tr aria-hidden="true" role="presentation"><td colspan="3" class="details-table-hr"></td></tr>
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

export const createDownloadsTableRow = (payload, recordId) => {
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
      <button data-url="${url}" data-id="${recordId}" class="download-resource govuk-button copy-link-btn" type="button">Download</button>
    </td>
  </tr>
  `;
};

const renderCopyLinkButton = (downloadLink: boolean, url: string): string => {
  return downloadLink
    ? 'N/A'
    : `<button class="govuk-button copy-link-btn copy-link" value="${url}" data-module="govuk-button">Copy Link</button>`;
};

const renderActionLink = (url: string, recordId: string) => {
  if (isEmpty(url)) {
    return 'N/A';
  }

  if (url.includes('/wfs')) {
    return `N/A`;
  }

  if (url.includes('/wms')) {
    return `<a class="govuk-link" href="/explore/${recordId}" target="_blank">Preview<span class="govuk-visually-hidden">(opens in a new tab)</span></a>`;
  }

  return `<a class="govuk-link" href="${url}" target="_blank">Open Link<span class="govuk-visually-hidden">(opens in a new tab)</span></a>`;
};

const createTableRow = (name: string, url: string, recordId: string) => {
  const dataSetName = name || 'Download data';
  const downloadLink = url.includes('?download=true');
  const dataServiceName = downloadLink ? 'Download data by area of interest and format' : dataSetName;

  if (isEmpty(url)) {
    return `
   <tr>
    <td>${dataServiceName}</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  `;
  }
  return `
   <tr>
    <td>${dataServiceName}</td>
    <td>${renderCopyLinkButton(downloadLink, url)}</td>
    <td>${renderActionLink(url, recordId)}</td>
  </tr>
  `;
};

const getAccessTabData = (payload: IAccessItem): IAccess => ({
  ncea_catalogue_number: payload.id ?? '', // file identifier
  host_catalogue_number: payload.id ?? '', // resource identifier
  host_catalogue_entry: '',
  resource_type_and_hierarchy: payload?.resourceType ?? '',
  // resource_locators: '', // keeps as empty as its value is not available from AGM side
  contact_information: payload.contactEmail ?? '',
  catalogue_number: '',
  // metadata_standard: payload?.metadata?.standard ?? '',
  metadata_language: payload?.metadata?.language?.toUpperCase() ?? '',
  resourceWebsite: generateResourceWebsiteTable(payload.resources ?? [], payload.id),
});

export { getAccessTabData, getResourceLocators, getCoupledResource, getContactInformation };
