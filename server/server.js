var express = require('express');
var mainRouter = require('./routes');

var configApp = require('./config/configApp');
var passport = require('./auth');

var esClient = require('./elasticSearch');




var app = express();



configApp(app);
app.use(passport.initialize());
app.use(passport.session());






app.use(mainRouter);
app.use(express.static(__dirname + '/../client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
})






app.set('port', (process.env.PORT || 3000));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});



module.exports = app;