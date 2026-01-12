/**
 * PostHog Client-Side Analytics
 * Provides page view tracking, button clicks, session replay, and feature flags
 */

(function () {
    'use strict';

    const apiKey = window.posthogApiKey;
    const host = window.posthogHost || 'https://eu.i.posthog.com';
    const isEnabled = window.posthogEnabled !== false;
    if (!isEnabled || !apiKey) {
        console.log('PostHog is disabled or API key not found');
        return;
    }

    // Load PostHog library
    !function (t, e) { var o, n, p, r; e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) { function g(t, e) { var o = e.split("."); 2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } } (p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r); var u = e; for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e }, u.people.toString = function () { return u.toString(1) + ".people (stub)" }, o = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "), n = 0; n < o.length; n++)g(u, o[n]); e._i.push([i, s, a]) }, e.__SV = 1) }(document, window.posthog || []);

    // Initialize PostHog
    posthog.init(apiKey, {
        api_host: host,
        person_profiles: 'identified_only',
        session_recording: {
            maskAllInputs: true,
            maskTextSelector: '[data-sensitive]',
        },
        autocapture: true,
        respect_dnt: true,
        loaded: function () {
            console.log('PostHog initialized');
        }
    });

    // Global API
    window.PostHog = {
        // Track custom event
        trackEvent: function (name, properties) {
            posthog.capture(name, properties || {});
        },

        // Track page view
        trackPageView: function () {
            posthog.capture('$pageview');
        },

        // Check feature flag
        isFeatureEnabled: function (flagKey) {
            return posthog.isFeatureEnabled(flagKey) === true;
        },

        // Get feature flag value
        getFeatureFlag: function (flagKey) {
            return posthog.getFeatureFlag(flagKey);
        },

        // Identify user
        identify: function (userId, properties) {
            posthog.identify(userId, properties || {});
        },

        // Reset on logout
        reset: function () {
            posthog.reset();
        }
    };

    // Auto-track page views
    PostHog.trackPageView();
})();
