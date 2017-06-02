"use strict";

var request = require('request'),
    config = require('../config').config,
    moment = require('moment'),

    response = function (error, response, body) {
        if (error) {
            console.error(`${moment().format()}: ERROR - ${error}`);
        }
        if (response && body) {
            var message = JSON.parse(body);
            console.log(`${moment().format()}: ${message.message}`);
        }
    },

    updateCheck = function (checkId, paused) {
        var postRequest = getOptions(`checks/${checkId}?paused=${paused}`);
        request.put(postRequest, response).auth(config.auth.user, config.auth.pass, true);
    },

    getOptions = function (action) {
        return {
            url: `${config.baseUrl}/${action}`,
            headers: config.headers
        }
    };

module.exports.updateCheck = updateCheck;
