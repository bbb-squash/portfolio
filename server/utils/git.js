'use strict';

module.exports.getCommitId = async () => {
    const exec_sync = require('child_process').execSync;
    const command = 'git log -n 1 --format=%H,%cd';
    const commit_id = exec_sync(command).toString().split(',');
    return commit_id.shift();
};