/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { ILicense } from '../interfaces/searchResponse.interface';

const ensureArray = (response) => {
  if (response === undefined || response === null) {
    return [];
  }
  if (!Array.isArray(response)) {
    response = [response];
  }
  return response;
};

const getLimitationData = (searchItem: Record<string, any>, type: string): string => {
  let result = '';
  const data = ensureArray(searchItem?._source?.OrgResourceConstraints);
  const filteredData = data?.filter((value) => Object.keys(value).length !== 0);

  if (filteredData) {
    filteredData.forEach((constraint: any) => {
      if (type === 'access' && constraint?.OrgAccessConstraints) {
        constraint?.OrgAccessConstraints?.forEach((accessConstraint: string) => {
          result += accessConstraint + '<br>';
        });
      }
      if (type === 'other' && constraint?.OrgAccessConstraints && !constraint?.OrgUseConstraints) {
        constraint?.OrgOtherConstraints?.forEach((otherConstraint: string) => {
          result += otherConstraint + '<br>';
        });
      }
      if (type === 'use' && constraint?.OrgUseConstraints) {
        constraint?.OrgUseConstraints?.forEach((useConstraint: string) => {
          result += useConstraint + '<br>';
        });
      }
      if (type === 'useOther' && constraint?.OrgUseConstraints && !constraint?.OrgAccessConstraints) {
        constraint?.OrgOtherConstraints?.forEach((otherConstraint: string) => {
          result += otherConstraint + '<br>';
        });
      }
      if (
        type === 'publicOther' &&
        ((!constraint?.OrgAccessConstraints && !constraint?.OrgUseConstraints) ||
          (constraint?.OrgAccessConstraints && constraint?.OrgUseConstraints))
      ) {
        if (constraint?.OrgOtherConstraints) {
          result = constraint?.OrgOtherConstraints?.join(', ');
        }
      }
    });
  }

  return result;
};

const getFrequencyUpdate = (searchItem: Record<string, any>): string => {
  let limitationPublicAccessOtherConstraint = '';
  if (
    Array.isArray(searchItem?._source?.cl_maintenanceAndUpdateFrequency) &&
    searchItem._source.cl_maintenanceAndUpdateFrequency.length > 0
  ) {
    limitationPublicAccessOtherConstraint = searchItem._source.cl_maintenanceAndUpdateFrequency
      .map((constraint: Record<string, any>) => constraint.default)
      .join(', ');
  }
  return limitationPublicAccessOtherConstraint;
};

const getAvailableFormats = (searchItem: Record<string, any>): string => {
  let limitationPublicAccessAvailableFormats = '';
  const data = ensureArray(searchItem?._source?.OrgDistributionFormats);
  if (data) {
    limitationPublicAccessAvailableFormats = data.map((format: { name: string }) => format.name).join(', ');
  }
  return limitationPublicAccessAvailableFormats;
};

const getLicenseTabData = (searchItem: Record<string, any>): ILicense => ({
  limitation_on_public_access: getLimitationData(searchItem, 'access'),
  limitation_on_public_access_otherconstraint: getLimitationData(searchItem, 'other'),
  conditions_for_access_and_use_useConstraints: getLimitationData(searchItem, 'use'),
  conditions_for_access_and_useOtherConstraints: getLimitationData(searchItem, 'useOther'),
  other_constraint: getLimitationData(searchItem, 'publicOther'),
  available_formats: getAvailableFormats(searchItem),
  frequency_of_update: getFrequencyUpdate(searchItem),
  character_encoding: 'utf8',
});

export { getLicenseTabData, getLimitationData, getAvailableFormats, getFrequencyUpdate, ensureArray };
