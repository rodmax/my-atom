/*
 * aliases.js
 *
 * Description : aliases for grunt
 *
 * Created by Maxim Rodionov
**/
module.exports = {
    backup: {
        description: 'Backup .atom/* config files and generate packages list file',
        tasks: ['copy:to-backup', 'shell:save-list']
    },
    restore: {
        description: 'Restore .atom/* config files and install all packages from backup/packages.txt',
        tasks: ['confirm:restore', 'shell:install-list', 'copy:from-backup']
    },
    default: ['backup']
};
