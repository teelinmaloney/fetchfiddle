;(function(window, ace) {
    'use strict';

    window.ff = window.ff || {};
    window.ff.completers = window.ff.completers || {};
    window.ff.completers.fetchCompleter = {
        getCompletions: function(editor, session, pos, prefix, callback) {
            callback(null, [{
                name: 'Test!',
                value: 'TEST!',
                score: 0,
                meta: 'fetch'
            }]);
        }
    };

} (window, ace));
