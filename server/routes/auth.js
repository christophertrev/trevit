var router = require('express').Router();
var passport = require('../auth');



router.get('/', function(req, res){
  res.send('Hello World! from auth?');
});


router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout',function(req,res){
  // res.redirect('/');
  req.logout();
  res.send('Successfully Logged out')
});




module.exports = router;