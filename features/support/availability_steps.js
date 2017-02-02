var {defineSupportCode} = require('cucumber');
var http = require('http');
var expect = require('expect.js');

defineSupportCode(function({Given, When, Then}) {

  var request;
  var host = process.env.IMPROVEMENTS_URL || "localhost";
  var port = host === "localhost" ? 5000 : null;

  Given('I want to make requests to site', function() {

  });

  When('I send any request', function () {
    request = function(callback) {
        http.get({host: host, port: port}, callback)
      }
  });

  Then('I should see {text}', function (text, callback) {
    request(function(response) {
         response.on('data', function(data) {
             expect(data.toString('utf8')).to.be(text);
             callback();
         });
         response.on('error', function(e) {
             callback(e);
         });
     });
  });
});