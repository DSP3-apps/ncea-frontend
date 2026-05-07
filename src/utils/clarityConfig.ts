/**
 * Microsoft Clarity Configuration Helper
 * Add this to your view context to enable MS Clarity session replay
 */

export const getClarityConfig = () => ({
  clarityEnabled: process.env.ENABLE_CLARITY !== 'false',
  clarityProjectId: process.env.CLARITY_PROJECT_ID || '',
});
