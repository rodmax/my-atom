/*
 * Gruntfile for "my-atom" project
 *
 * Created by Maxim Rodionov
**/
module.exports = function(grunt) {
    'use strict';

    require('load-grunt-config')(grunt, {
        data: {
            atomFiles: [
                'init.coffee',
                'keymap.cson',
                'snippets.cson',
                'projects.cson',
                'styles.less'
            ],
            backupDir: 'backup',
            packagesListFile: 'backup/packages.txt'
        },
        jitGrunt: {
            staticMappings: {
                availabletasks: 'grunt-available-tasks',
            }
        }
    });

};

