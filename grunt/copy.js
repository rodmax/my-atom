/*
 * copy tasks config
 *
 * Created by Maxim Rodionov on 03/03/2015
 *
 * All Rights Reserved.
**/
module.exports = function(grunt, options) {
    'use strict';
    return {
        'to-backup': {
            cwd: '/home/max/.atom',
            src: options.atomFiles,
            dest: options.backupDir,
            expand: true,
        },
        'from-backup': {
            dest: '/home/max/.atom',
            src: options.atomFiles,
            cwd: options.backupDir,
            expand: true,
        }
    };
};
