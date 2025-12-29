/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { ILicense, ILicenseItem } from '../interfaces/searchResponse.interface';

const formmatLicenseData = (licenseData: string[]) => {
  if (Array.isArray(licenseData) && licenseData.length > 0) {
    return licenseData.join('<br>');
  }
  return '';
};

const getLicenseTabData = (license: ILicenseItem): ILicense => {
  return {
    limitation_on_public_access: formmatLicenseData(license?.publicAccessAccessContraints ?? []),
    limitation_on_public_access_otherconstraint: formmatLicenseData(license?.publicAccessOtherConstraints ?? []),
    conditions_for_access_and_useOtherConstraints: license?.publicUseOtherContraints ?? '',
    conditions_for_access_and_use_useConstraints: license?.publicUseUseConstraints ?? '',
    other_constraint: '', // Need to test once data is availble from AGM side
  };
};
export { getLicenseTabData, formmatLicenseData };
