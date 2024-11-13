'use strict';
import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { environmentConfig } from '@/config/environmentConfig';

const MdcSchemaController = {
  MdcSchemaHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      return response
        .view('screens/mdc/mdc', { webDomain: environmentConfig.webDomain })
        .header('Content-Type', 'application/xml');
    } catch (error) {
      return response.response({ error: 'An error occurred while processing your request' }).code(500);
    }
  },
  MdcClassifierSchemaHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      return response
        .view('screens/mdc/classifiers', { webDomain: environmentConfig.webDomain })
        .header('Content-Type', 'application/xml');
    } catch (error) {
      return response.response({ error: 'An error occurred while processing your request' }).code(500);
    }
  },
  MdcIdentifierSchemaHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      return response
        .view('screens/mdc/identifiers', { webDomain: environmentConfig.webDomain })
        .header('Content-Type', 'application/xml');
    } catch (error) {
      return response.response({ error: 'An error occurred while processing your request' }).code(500);
    }
  },
};

export { MdcSchemaController };
