require('./runner');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/public'));
app.use("/", function(req, res, next) {
   require('./runner');
   res.redirect("/results.html");
})

app.listen(app.get('port'), function(){
     console.log('Express server listening on port', app.get('port'))
});