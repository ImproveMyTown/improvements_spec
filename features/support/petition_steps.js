var {defineSupportCode} = require('cucumber');
var http = require('http');
var expect = require('expect.js');

defineSupportCode(function({Given, When, Then}) {

  var host = process.env.IMPROVEMENTS_URL;
  var port = process.env.IMPROVEMENTS_PORT;
  var request;
  var result;

  Given('I want to create a petition', function() {});

  When('I send a petition request with name: {description}', function (description, callback) {
    var post_data = JSON.stringify({description: description});
    var post_options = {
          host: host,
          port: port,
          path: '/petitions',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(post_data)
          }
      };
      var post_req = http.request(post_options, function(response) {
            response.setEncoding('utf8');
            response.on('data', function (data) {
                result = data;
                callback();
            });
            response.on('error', function(e) {
                callback(e);
            });
        });
     post_req.write(post_data);
     post_req.end();
  });

  Given('I should get a single message', function(callback) {
    try {
      var json = JSON.parse(result);
      expect(json.messages.length).to.be(1);
    } catch(ex) {
      ex.message = ex.message + ". Response: " + result;
      callback(ex);
    }
  });

  Given('with level: {level}', function(level, callback) {
    var json = JSON.parse(result);
    expect(json.messages[0].level).to.be(level);
  });

  Given('with description: {description}', function(description, callback) {
    var json = JSON.parse(result);
    expect(json.messages[0].description).to.be(description);
  });
});