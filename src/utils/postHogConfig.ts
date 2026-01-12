/**
 * PostHog Configuration Helper
 * Add this to your view context to enable PostHog tracking
 */

export const getPostHogConfig = () => ({
  posthogEnabled: process.env.ENABLE_POSTHOG !== 'false',
  posthogApiKey: process.env.POSTHOG_API_KEY || '',
  posthogHost: process.env.POSTHOG_HOST || 'https://eu.i.posthog.com',
});
