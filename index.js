"use strict";

var cron = require('cron'),
    moment = require('moment'),
    jobs = require('./config').jobs,
    pingbreak = require('./lib/pingbreak'),
    queue = [],
    getJob = function (cronTime, id, pause, timeZone) {
        return new cron.CronJob({
            cronTime: cronTime,
            onTick: function () {
                console.log(`${moment().format()}: ${pause ? 'Pause' : 'Resume'} job triggered for check ${id}`);
                pingbreak.updateCheck(id, pause);
            },
            start: false,
            timeZone: timeZone
        });
    };

// Create cron job for each check defined in the config.js
jobs.checks.forEach(function (check) {
    var pauseJob = getJob(check.pause, check.id, true, jobs.timezone);
    var resumeJob = getJob(check.resume, check.id, false, jobs.timezone);
    queue.push(pauseJob, resumeJob);
});

// Start all cron jobs
queue.forEach(function (job) {
    job.start();
});