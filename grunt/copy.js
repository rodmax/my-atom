/*
 * copy tasks config
 *
 * Created by Maxim Rodionov on 03/03/2015
 *
 * All Rights Reserved.
**/
module.exports = function(grunt, options) {
    'use strict';
    grunt.log.ok(options.atomFiles);
    return {
        'atom-files': {
            cwd: '/home/max/.atom',
            src: options.atomFiles,
            dest: options.backupDir,
            expand: true,
        },
    };
};
