'use strict';

/**
 * Validates and sets the environment configuration based on the provided schema.
 * If the environment config is invalid, an error is thrown.
 *
 * @throws {Error} If the environment config is invalid
 *
 * @returns {EnvironmentConfig} The validated environment configuration
 */

import { EnvironmentConfig } from '../interfaces/environmentConfig.interface';
import { environmentSchema } from '../schema/environmentConfig.schema';

const config: EnvironmentConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  appInsightsConnectionString: '',
  azureKeyVaultURL: process.env.AZURE_KEYVAULT_URL,
  appInsightsSecretName: process.env.APPINSIGHTS_SECRET_NAME,
  isLocal: process.env.NODE_ENV === 'local',
  gtmId: process.env.GTM_ID,
  classifierApiUrl: process.env.CLASSIFIER_API_URL,
  classifierApiKey: process.env.CLASSIFIER_API_KEY,
  webDomain: process.env.WEBDOMAIN,
  keyboardFiltersBaseUrl: process.env.KEYBOARD_FILTER_LOCAL_BASE_URL || '',
  auth0JwtEnv: process.env.AUTH0_JWT_ENV,
  searchApiUrl: process.env.SEARCH_API ?? '',
};

const { error, value } = environmentSchema.validate(config);

if (error) {
  throw new Error(`The environment config is invalid: ${error.message}`);
}

const environmentConfig = value as EnvironmentConfig;

export { environmentConfig };
