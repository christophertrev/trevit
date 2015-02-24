var router = require('express').Router();




router.get('/', function(req, res){
  res.send('Hello World! from auth?');
});


// router.get('/login', function(req,res){

// });

router.post('/login', function(req,res){

});

router.get('/logout',function(req,res){
  res.send('Successfully Logged out')
});




module.exports = router;