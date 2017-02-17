var reporter = require('cucumber-html-reporter');
var exec = require('child_process').exec;
var express = require('express');
var path = require('path');
var app = express();
app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/public'));

app.use("/", function(req, res, next) {
    exec('node ./node_modules/.bin/cucumber-js --format=json | tee ./public/results.json', function() {
       res.sendFile(path.join(__dirname, '/public/results.html'));
    });
});

app.listen(app.get('port'), function(){
     console.log('Express server listening on port', app.get('port'))
});