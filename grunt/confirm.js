/*
 * confirm grunt task
 *
 * Created by Maxim Rodionov
**/
module.exports = function(grunt, options) {
    'use strict';
    grunt.log.ok(options.atomFiles);
    return {
        restore: {
            options: {
                question: 'After restore you lose all current atom configuration. (y - continue, {other} - abort)?',
                input: '_key:y'
            }
        },
    };
};
