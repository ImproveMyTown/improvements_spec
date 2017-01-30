var {defineSupportCode} = require('cucumber');
var http = require('http');
var expect = require('expect.js');

defineSupportCode(function({Given, When, Then}) {

  var request;

  Given('I want to make requests to site', function() {

  });

  Then('I send request to {route}', function (route) {
    request = function(callback) {
        http.get({host: route}, callback)
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