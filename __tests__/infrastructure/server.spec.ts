import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import { customHapiPino, customHapiRoutes, customHapiViews } from '../../src/infrastructure/plugins';
import { authSchema } from '../../src/infrastructure/plugins/auth';

jest.mock('@hapi/hapi', () => ({
  server: jest.fn(() => ({
    register: jest.fn(),
    initialize: jest.fn(),
    start: jest.fn(),
    ext: jest.fn(),
    info: { uri: 'http://localhost:4000', port: '4000' },
    auth: {
      scheme: jest.fn(),
      strategy: jest.fn(),
      default: jest.fn(),
    },
  })),
  Server: jest.fn(),
}));

jest.mock('../../src/infrastructure/plugins/appinsights-logger', () => ({
  info: jest.fn(),
}));

jest.mock('../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

describe('Server initialization', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize the server correctly', async () => {
    const { initializeServer } = require('../../src/infrastructure/server');

    jest.mock('../../src/config/environmentConfig', () => ({
      environmentConfig: {
        env: 'development',
        port: 3000,
        appInsightsConnectionString: 'test',
        searchApiUrl: 'https://example.com/api',
        vocabularyApiUrl: 'https://example.com/api',
        categoryResultCountApiUrl: 'https://example.com/api'
      },
    }));

    const server = await initializeServer();
    expect(Hapi.server).toHaveBeenCalledWith({
      host: '0.0.0.0',
      port: 3000,
      routes: {
        validate: {
          options: {
            abortEarly: false,
          },
        },
      },
    });

    expect(server.register).toHaveBeenCalledTimes(4);
    expect(server.register).toHaveBeenCalledWith([inert, vision]);
    expect(server.register).toHaveBeenCalledWith(customHapiViews);
    expect(server.register).toHaveBeenCalledWith(
      { plugin: customHapiRoutes },
      {
        routes: { prefix: '/natural-capital-ecosystem-assessment' },
      },
    );
    expect(server.register).toHaveBeenCalledWith([customHapiPino]);

    expect(server.auth.scheme).toHaveBeenCalledWith('auth', authSchema);
    expect(server.auth.strategy).toHaveBeenCalledWith('auth-strategy', 'auth', {});
    expect(server.auth.default).toHaveBeenCalledWith('auth-strategy');

    expect(server.initialize).toHaveBeenCalled();
  });

  it('should start the server correctly', async () => {
    const { startServer } = require('../../src/infrastructure/server');
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const server = await startServer();
    expect(server.start).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`Server running at: http://${server.info.host}:${server.info.port}`);
    consoleSpy.mockRestore();
  });

  it('should initialize the server with the correct port base on NODE_ENV', async () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';

    const { initializeServer } = require('../../src/infrastructure/server');
    const server = await initializeServer();
    expect(server.info.port).toBe('4000');

    process.env.NODE_ENV = originalNodeEnv;
  });
});
