'use strict';

import { Lifecycle, Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Joi from 'joi';

import { geographyQuestionnaireOptions } from '@/data/geographyQuestionnaireOptions';
import { formIds, pageTitles, queryParamKeys, webRoutePaths } from '@/utils/constants';
import { readQueryParams, upsertQueryParams } from '@/utils/queryStringHelper';
import { transformTextInputError } from '@/utils/transformErrors';

const GeographySearchController = {
  renderGeographySearchHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const formFields = { ...geographyQuestionnaireOptions };
    const { geographySearch, guidedDateSearch: guidedDateSearchPath, results } = webRoutePaths;
    const formId: string = formIds.geographyQuestionnaireFID;
    const count: string = readQueryParams(request.query, queryParamKeys.count);
    const queryString: string = readQueryParams(request.query, '');
    const geographySearchPath: string = `${geographySearch}?${queryString}`;
    const skipPath: string = `${results}?${queryString}`;

    const queryStringObj = new URLSearchParams(queryString);
    queryStringObj.delete('fdy');
    queryStringObj.delete('tdy');
    queryStringObj.delete('cnt');
    const hasLevelOrParent = queryStringObj.has('level') || queryStringObj.has('parent');
    const guidedDateSearchPathNew: string = `${guidedDateSearchPath}${hasLevelOrParent ? '?' + queryStringObj.toString() : ''}`;

    const resultPathQueryString: string = readQueryParams(request.query, '', true);
    const resultsPath: string = `${results}?${resultPathQueryString}`;
    return response.view('screens/guided_search/geography_questionnaire', {
      pageTitle: pageTitles.geography,
      guidedDateSearchPath,
      geographySearchPath,
      formFields,
      formId,
      skipPath,
      count,
      resultsPath,
      backLinkPath: guidedDateSearchPathNew,
    });
  },
  doGeographySearchFailActionHandler: async (
    request: Request,
    response: ResponseToolkit,
    error: Joi.ValidationError,
  ): Promise<Lifecycle.ReturnValue> => {
    const count: string = readQueryParams(request.query, queryParamKeys.count);
    const finalFormFields = await transformTextInputError({ ...geographyQuestionnaireOptions }, error);
    const { geographySearch, guidedDateSearch: guidedDateSearchPath, results } = webRoutePaths;
    const formId: string = formIds.geographyQuestionnaireFID;
    const queryString: string = readQueryParams(request.query, '');
    const skipPath: string = `${results}?${queryString}`;
    const resultPathQueryString: string = readQueryParams(request.query, '', true);
    const resultsPath: string = `${results}?${resultPathQueryString}`;
    const geographySearchPath: string = `${geographySearch}?${queryString}`;
    return response
      .view('screens/guided_search/geography_questionnaire', {
        pageTitle: pageTitles.geography,
        guidedDateSearchPath,
        geographySearchPath,
        formFields: finalFormFields,
        formId,
        skipPath,
        count,
        resultsPath,
        backLinkPath: guidedDateSearchPath,
      })
      .code(400)
      .takeover();
  },
  doGeographySearchHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    const payload = request.payload as Record<string, string>;
    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.north]: payload?.['north'] ?? '',
      [queryParamKeys.south]: payload?.['south'] ?? '',
      [queryParamKeys.east]: payload?.['east'] ?? '',
      [queryParamKeys.west]: payload?.['west'] ?? '',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, true);
    return response.redirect(`${webRoutePaths.results}?${queryString}`);
  },
};

export { GeographySearchController };
