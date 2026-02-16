export interface EnvironmentConfig {
  port: string | undefined;
  env: string | undefined;
  appInsightsConnectionString: string | undefined;
  azureKeyVaultURL: string | undefined;
  appInsightsSecretName?: string;
  isLocal?: boolean;
  gtmId?: string;
  classifierApiUrl: string | undefined;
  classifierApiKey: string | undefined;
  webDomain?: string;
  keyboardFiltersBaseUrl?: string | undefined;
  auth0JwtEnv?: string;
  searchApiUrl: string | undefined;
  vocabularyApiUrl: string | undefined;
  categoryResultCountApiUrl: string | undefined;
  surveyIndexPreviewRecordId: string | undefined;
  featureFlag: boolean;
}
