import { PostHog } from 'posthog-node';

class PostHogService {
  private client: PostHog | null = null;
  private isEnabled: boolean = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    const apiKey = process.env.POSTHOG_API_KEY;
    const host = process.env.POSTHOG_HOST || 'https://eu.posthog.com';

    if (!apiKey) {
      console.warn('PostHog API key not found. Set POSTHOG_API_KEY in .env');
      return;
    }

    this.isEnabled = process.env.ENABLE_POSTHOG !== 'false';

    if (!this.isEnabled) {
      return;
    }

    try {
      this.client = new PostHog(apiKey, {
        host: host,
        flushAt: 20,
        flushInterval: 10000,
      });
      console.log('PostHog service initialized');
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
    }
  }

  public captureEvent(userId: string, event: string, properties?: Record<string, unknown>): void {
    if (!this.isEnabled || !this.client) return;

    try {
      this.client.capture({
        distinctId: userId,
        event,
        properties,
      });
    } catch (error) {
      console.error('PostHog captureEvent error:', error);
    }
  }

  public capturePageView(userId: string, path: string, properties?: Record<string, unknown>): void {
    this.captureEvent(userId, '$pageview', {
      $current_url: path,
      ...properties,
    });
  }

  public async isFeatureEnabled(userId: string, flagKey: string): Promise<boolean> {
    if (!this.isEnabled || !this.client) return false;

    try {
      return (await this.client.isFeatureEnabled(flagKey, userId)) === true;
    } catch (error) {
      console.error('PostHog isFeatureEnabled error:', error);
      return false;
    }
  }

  public async getFeatureFlag(userId: string, flagKey: string): Promise<string | boolean | undefined> {
    if (!this.isEnabled || !this.client) return undefined;

    try {
      return await this.client.getFeatureFlag(flagKey, userId);
    } catch (error) {
      console.error('PostHog getFeatureFlag error:', error);
      return undefined;
    }
  }

  public async shutdown(): Promise<void> {
    if (this.client) {
      await this.client.shutdown();
    }
  }
}

export const postHogService = new PostHogService();
