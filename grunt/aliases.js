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
        tasks: ['copy:atom-files', 'shell:save-list']
    },
    default: ['backup']
};
