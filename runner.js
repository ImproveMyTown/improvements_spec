var reporter = require('cucumber-html-reporter');
var exec = require('child_process').exec;

var run = function() {
    exec('node ./node_modules/.bin/cucumber-js --format=json | tee ./public/results.json',

        (error, stdout, stderr) => {
        var options = {
                theme: 'bootstrap',
                jsonFile: './public/results.json',
                output: './public/results.html',
                reportSuiteAsScenarios: true,
                launchReport: false,
                metadata: {
                    "App Version":"0.3.2",
                    "Test Environment": "STAGING",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
        reporter.generate(options);
    });
}

module.exports = {
  run: run
}

