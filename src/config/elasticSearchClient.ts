/* eslint-disable  @typescript-eslint/no-explicit-any */

import { environmentConfig } from './environmentConfig';
import fs from 'fs';
import { geoNetworkIndex } from '../utils/constants';
import path from 'path';
import { Client, ClientOptions, estypes } from '@elastic/elasticsearch';

const { elasticSearchAPI, elasticSearchUsername, elasticSearchPassword } = environmentConfig;

const hasCredentials: boolean = !!elasticSearchUsername?.length && !!elasticSearchPassword?.length;
const certPath: string = path.join('/usr/share/elasticsearch/config/certs', 'ca.crt');

const clientOptions: ClientOptions = {
  node: elasticSearchAPI,
  ...(hasCredentials && {
    auth: {
      username: elasticSearchUsername as string,
      password: elasticSearchPassword as string,
    },
    // tls: {
    //   ca: fs.readFileSync(certPath),
    //   rejectUnauthorized: true,
    // },
  }),
};
console.log('ELASTIC SEARCH CONFIG: ', clientOptions);
const client = new Client(clientOptions);

console.log('ELASTIC SEARCH QUERY');
const performQuery = async <T>(payload: estypes.SearchRequest, isCount: boolean = false): Promise<T> => {
  try {
    const endPoint: string = isCount ? 'count' : 'search';
    const result = await client[endPoint]({
      index: geoNetworkIndex,
      ...payload,
    });
    return result as T;
  } catch (error: any) {
    console.log('ELASTIC SEARCH QUERY ERRORED: ', error);
    throw new Error(`Elasticsearch results: ${error.message}`);
  }
};
console.log('ELASTIC SEARCH QUERY PERFORMED');

export { performQuery, hasCredentials, clientOptions };
