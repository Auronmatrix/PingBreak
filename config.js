"use strict";

require('dotenv').config();
var timezone = require('moment'),
    config = {
        baseUrl: "https://api.pingdom.com/api/2.0",
        headers: {
            'App-Key': process.env.PINGDOM_APP_KEY
        },
        'auth': {
            'user': process.env.PINGDOM_USER,
            'pass': process.env.PINGDOM_PASS,
            'sendImmediately': true
        }
    },
    jobs = {
        timezone: 'Europe/Berlin', // Moment named timezone string
        checks: [
            {
                id: 1234567, // Check id from Pingdom back end
                pause: "15 * * * * *", // CronTime when to pause monitoring
                resume: "50 * * * * *" // CronTime when to resume monitoring
            }
        ]
    };

module.exports.config = config;
module.exports.jobs = jobs;