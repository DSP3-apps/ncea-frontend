'use strict';

import { Contact, IGovernance } from '../interfaces/searchResponse.interface';

const getGovernanceTabData = (contacts: Contact[]): IGovernance[] => {
  const governanceData: IGovernance[] = contacts?.map((contact) => ({
    tab: 'governance',
    role: contact.role ?? '',
    organization_name: contact.organisation ?? '',
    individual_name: contact.name ?? '',
    position_name: '', // Decided to keep as empty as there is no data exist from AGM side
    telephone_number: contact.phone ?? '',
    delivery_point: contact.delivery ?? '',
    postal_code: contact.postcode ?? '',
    city: contact.city ?? '',
    administrative_area: contact.aministrativeArea ?? '',
    country: contact.country || '',
    web_address: '', // Decided to keep as empty as there is no data exist from AGM side
    email: contact.email ?? '',
  }));
  return governanceData;
};

export { getGovernanceTabData };
