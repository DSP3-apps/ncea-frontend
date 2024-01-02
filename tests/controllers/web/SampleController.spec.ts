'use strict';

const SampleController = require('../../../src/controllers/web/SampleController');

describe('Sample Controller > deals with render sample2 handler', () => {
  const request = {
    server: {
      version: '21.3.2',
    },
  };

  const response = {
    view: jest.fn(),
  };

  beforeAll(() => {
    SampleController.renderSample2Handler(request, response);
  });

  it('should call the view with context', async () => {
    const context = {
      title: 'Hapi ' + request.server.version,
      message: 'Hello Nunjucks!',
    };
    expect(response.view).toHaveBeenCalledWith('sample', context);
  });
});
