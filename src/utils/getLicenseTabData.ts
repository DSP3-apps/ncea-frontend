/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { ILicense } from '../interfaces/searchResponse.interface';

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

const formmatLicenseData = (licenseData: string[]) => {
  if (Array.isArray(licenseData) && licenseData.length > 0) {
    return licenseData.join('<br>');
  }
  return '';
};

const getLicenseTabData = (license: ILicense) => {
  return {
    limitation_on_public_access: formmatLicenseData(license?.publicAccessAccessContraints ?? []),
    limitation_on_public_access_otherconstraint: formmatLicenseData(license?.publicAccessOtherConstraints ?? []),
    conditions_for_access_and_use_useConstraints: formmatLicenseData(license?.publicUseUseConstraints ?? []),
    conditions_for_access_and_useOtherConstraints: formmatLicenseData(license?.publicUseOtherContraints ?? []),
    other_constraint: '', // Need to test once data is availble from AGM side
    available_formats: '', // Need to test once data is availble from AGM side
    frequency_of_update: license?.frequencyOfUpdate ?? '',
    character_encoding: 'utf8',
  };
};
export { getLicenseTabData, getFrequencyUpdate };
