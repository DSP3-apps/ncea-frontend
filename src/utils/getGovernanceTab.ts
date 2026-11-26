'use strict';

import { Contact, IGovernance } from '../interfaces/searchResponse.interface';

const getGovernanceTabData = (contacts: Contact[]): IGovernance[] => {
  const governanceData: IGovernance[] = contacts?.map((contact) => ({
    tab: 'governance',
    role: contact.role ?? '',
    organization_name: contact.organisationName ?? contact.organisation ?? '',
    individual_name: contact.individualName ?? contact.name ?? '',
    position_name: contact.positionName ?? '',
    telephone_number: contact.phone ?? '',
    delivery_point: contact.delivery ?? '',
    postal_code: contact.postcode ?? '',
    city: contact.city ?? '',
    administrative_area: contact.administrativeArea ?? '',
    country: contact.country || '',
    web_address: '', // Decided to keep as empty as there is no data exist from AGM side
    email: contact.emailAddress ?? contact.email ?? '',
  }));
  return governanceData;
};

export { getGovernanceTabData };
