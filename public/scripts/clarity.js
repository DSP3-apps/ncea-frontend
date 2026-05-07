/**
 * Microsoft Clarity Client-Side Session Replay
 * Provides session recording and user behaviour analytics
 */

(function () {
    'use strict';

    const projectId = window.clarityProjectId;
    const isEnabled = window.clarityEnabled !== false;

    console.log('Initializing MS Clarity with project ID:', projectId, 'Enabled:', isEnabled);

    if (!isEnabled || !projectId) {
        console.log('MS Clarity is disabled or project ID not found');
        return;
    }

    // Load Microsoft Clarity snippet
    (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);

    // Associate session with logged-in user email when available
    if (typeof window.userEmail === 'string' && window.userEmail) {
        clarity('identify', window.userEmail);
        clarity('set', 'email', window.userEmail);
    }

    // Global API
    window.Clarity = {
        // Set a custom tag on the session
        setTag: function (key, value) {
            clarity('set', key, value);
        },

        // Identify the current user
        identify: function (userId, properties) {
            clarity('identify', userId, null, null, userId);
            if (properties) {
                Object.keys(properties).forEach(function (key) {
                    clarity('set', key, properties[key]);
                });
            }
        },

        // Upgrade the session priority (e.g. on error)
        upgrade: function (reason) {
            clarity('upgrade', reason);
        }
    };
})();
