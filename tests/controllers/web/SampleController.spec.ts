'use strict';

import { mock } from 'jest-mock-extended';
import { Request, ResponseToolkit } from '@hapi/hapi';
import { SampleController } from '../../../src/controllers/web/SampleController';

describe('Sample Controller > deals with render sample2 handler', () => {
  const mockRequest = mock<Request>();

  const mockResponse = mock<ResponseToolkit>();

  beforeAll(() => {
    return SampleController.renderSampleHandler(mockRequest, mockResponse);
  });

  it('should call the view with context', async () => {
    const context = {
      title: 'Hapi ' + mockRequest.server.version,
      message: 'Hello Nunjucks!',
    };
    expect(mockResponse.view).toHaveBeenCalledWith('sample', context);
  });
});
