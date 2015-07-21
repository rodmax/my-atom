/*
 * shell commands
 *
 * Created by Maxim Rodionov on 02/04/2015
 *
 * All Rights Reserved.
**/
module.exports = function(grunt, options) {
    'use strict';
    return {
        'save-list': {
            command: 'apm list --installed --bare > ' + options.packagesListFile
        }
    };
};
