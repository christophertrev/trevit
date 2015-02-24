var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('express-session');



module.exports = function (app){
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(sessions({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));
  return app;
}