module.exports = function(req, res, next) {
  var host = req.headers.host.substring(0, req.headers.host.indexOf(':'));
  console.log(host);
  switch(host) {
    case 'localhost':
        process.env['IMPROVEMENTS_URL'] = 'localhost';
        process.env['IMPROVEMENTS_PORT'] = 5000;
         break;
    case 'improvements-spec.herokuapp.com':
        process.env['IMPROVEMENTS_URL'] = 'improvements.herokuapp.com';
        process.env['IMPROVEMENTS_PORT'] = null;
  }
  next();
};