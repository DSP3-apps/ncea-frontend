'use strict';

const setNceaContribution = (contributionType: string): string => {
  if (contributionType === 'Supported' || contributionType === 'Funded') {
    return contributionType.toLowerCase();
  }
  return '';
};

export { setNceaContribution };
