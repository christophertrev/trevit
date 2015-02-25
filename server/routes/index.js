var router = require('express').Router();
var authRouter = require('./auth');
var esRouter = require('./esStats');

var client = require('../elasticSearch');


router.use('/auth', authRouter);
router.use('/es',esRouter);
router.use('/front', function(req,res){
  client.search({
    index: 'topic',
    size: 50,
    id: 'AUvCwjmiQMlGKUpucNQ7'
    // body: {
    //   query: {
    //     match: {
    //       title: 'JavaScript Everywhere!'
    //     }
    //   }
    // }
  }).then(function (resp) {
    console.log('stuff returned',resp.hits.hits)
    res.json(resp.hits.hits)
    // var hits = resp.body.hits;
  })
});





module.exports = router; 