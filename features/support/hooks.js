var {defineSupportCode} = require('cucumber');
var reporter = require('cucumber-html-reporter');
var path = require('path');
var find = require('find');

defineSupportCode(function({registerHandler}) {

     registerHandler('AfterFeatures', function (features, callback) {

        var options = {
                theme: 'bootstrap',
                jsonFile: __dirname + '/../../public/results.json',
                output: __dirname + '/../../public/results.html',
            };

        reporter.generate(options);
        callback();
    });
});