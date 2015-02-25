var router = require('express').Router();
var client = require('../elasticSearch');


router.get('/', function(req, res){
  client.cluster.health(function (err, resp) {
    if (err) {
      res.send(err.message);
    } else {
      res.send(resp);
    }
  });
});
 


router.get('/_stats', function(req, res){
  client.cluster.stats(function (err, resp) {
    if (err) {
      res.send(err.message);
    } else {
      res.send(resp);
    }
  });
});


// state


router.get('/_state', function(req, res){
  client.cluster.state(function (err, resp) {
    if (err) {
      res.send(err.message);
    } else {
      res.send(resp);
    }
  });
});


module.exports = router; 