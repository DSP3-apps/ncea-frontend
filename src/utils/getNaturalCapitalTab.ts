'use strict';

import { INatural, INaturalItem } from '../interfaces/searchResponse.interface';

const getNaturalTab = (payload: INaturalItem): INatural => ({
  Natural_capital_title: payload?.title ?? '',
  Natural_capital_description: payload?.abstract ?? '',
  Natural_capital_displayData: '', // There is no data available from AGM side, so decided to leave as empty
  Natural_capital_no_data: '', // There is no data available from AGM side, so decided to leave as empty
  Natural_capital_glossary_link: '', // There is no data available from AGM side, so decided to leave as empty
});

export { getNaturalTab };
