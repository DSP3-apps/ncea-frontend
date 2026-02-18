import dotenv from 'dotenv';
import Joi from 'joi';

const envs = ['local', 'sandbox', 'dev', 'qa', 'test', 'preprod', 'prod'];

if ([envs[0]].includes(process.env.NODE_ENV)) {
  dotenv.config();
}

export const environmentSchema: Joi.ObjectSchema = Joi.object({
  port: Joi.string().default('3000').messages({
    'string.base': 'Port must be a string',
  }),
  env: Joi.string()
    .valid(...envs)
    .default(envs[0])
    .messages({
      'string.base': 'Environment must be a string',
      'any.only': 'Provided Environment is not valid',
    }),
  appInsightsConnectionString: Joi.string().allow('').default('').messages({
    'string.base': 'Insights key must be a string',
  }),
  appInsightsSecretName: Joi.string().allow('').default('').messages({
    'string.base': 'Insights secret name must be a string',
  }),
  azureKeyVaultURL: Joi.string().uri().allow('').default('').messages({
    'string.uri': 'Azure Key Vault URI must be a valid URL or an empty string',
  }),
  isLocal: Joi.boolean().valid(true, false).default(false).messages({
    'boolean.base': 'Is Local must be a boolean value',
    'any.only': 'Is Local is not valid',
  }),
  gtmId: Joi.string().allow('').default('').messages({
    'string.base': 'GTM ID must be a string',
  }),
  classifierApiUrl: Joi.string().uri().allow('').default('').messages({
    'string.uri': 'Classifier search api URI must be a valid URL or an empty string',
  }),
  classifierApiKey: Joi.string().allow('').default('').messages({
    'string.base': 'Classifier search api key must be a string',
  }),
  webDomain: Joi.string().allow('').default('').messages({
    'string.base': 'The web domain must be a string.',
  }),
  keyboardFiltersBaseUrl: Joi.string().allow('').default('').messages({
    'string.base': 'The keyboard filters base url must be a string.',
  }),
  auth0JwtEnv: Joi.string().allow('').default('').messages({
    'string.base': 'The auth0 JWT environment must be a string.',
  }),
  searchApiUrl: Joi.string().uri().messages({
    'string.uri': 'Search API must be a valid URL',
  }),
  vocabularyApiUrl: Joi.string().uri().messages({
    'string.uri': 'Vocabulary API must be a valid URL',
  }),
  categoryResultCountApiUrl: Joi.string().uri().messages({
    'string.uri': 'Category Result Count API must be a valid URL',
  }),
  surveyIndexPreviewRecordId: Joi.string().messages({
    'string.base': 'Survey Index Preview Record ID must be a string',
  }),
  featureFlag: Joi.boolean().valid(true, false).default(false).messages({
    'boolean.base': 'Feature Flag must be a boolean value',
    'any.only': 'Feature Flag is not valid',
  }),
  parentChildFeatureFlag: Joi.boolean().valid(true, false).default(false).messages({
    'boolean.base': 'Parent Child Feature Flag must be a boolean value',
    'any.only': 'Parent Child Flag is not valid',
  }),
  enablePostHogFeatureFlag: Joi.boolean().valid(true, false).default(false).messages({
    'boolean.base': 'Posthog Feature Flag must be a boolean value',
    'any.only': 'Posthog Feature Flag is not valid',
  }),
});
