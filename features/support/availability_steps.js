var {defineSupportCode} = require('cucumber');
var http = require('http');
var expect = require('expect.js');

defineSupportCode(function({Given, When, Then}) {

  var host = process.env.IMPROVEMENTS_URL || "localhost";
  var port = host === "localhost" ? 5000 : null;
  var result;

  Given('I want to make requests to site', function() {});

  When('I send any request', function (callback) {
      http.get({host: host, port: port},
          function(response) {
               response.on('data', function(data) {
                   result = data.toString('utf8');
                   callback();
               });
               response.on('error', function(e) {
                   callback(e);
               });
          });
  });

  Then('I should see {text}', function (text, callback) {
    expect(result).to.be(text);
    callback();
  });
});