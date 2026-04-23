/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { ILicense, ILicenseItem } from '../interfaces/searchResponse.interface';

const formmatLicenseData = (licenseData: string[]) => {
  if (Array.isArray(licenseData) && licenseData.length > 0) {
    return licenseData.join('<br>');
  }
  return '';
};

export const ConcateValues = (text: string, attributionStatement: string): string => {
  if (text && attributionStatement) {
    return `${text}<br>${attributionStatement}`;
  }
  return text || attributionStatement || '';
};

const getLicenseTabData = (licence: ILicenseItem): ILicense => {
  return {
    limitation_on_public_access: licence?.useLimitationStatement ?? '',
    limitation_on_public_access_otherconstraint: formmatLicenseData(licence?.publicAccessOtherConstraints ?? []),
    conditions_for_access_and_useOtherConstraints: ConcateValues(
      licence?.text ?? '',
      licence?.attributionStatement ?? '',
    ),
    conditions_for_access_and_use_useConstraints: licence?.useLimitationStatement ?? '',
    other_constraint: '', // Need to test once data is availble from AGM side
    attribution_statement: licence?.attributionStatement ?? '',
  };
};
export { getLicenseTabData, formmatLicenseData };
