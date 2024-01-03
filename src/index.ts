import { Server } from '@hapi/hapi';

import { createServer } from './infrastructure/server';

const bootstrap = async () => {
  const server: Server = await createServer();
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

bootstrap();
