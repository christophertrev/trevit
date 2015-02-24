var express = require('express');
var morgan = require('morgan');
var app = express();


var mainRouter = require('./routes');



app.use(morgan('dev'));
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