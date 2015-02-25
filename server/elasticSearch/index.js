var elasticsearch = require('elasticsearch')

var client = elasticsearch.Client({
  hosts: [
    'http://10.131.155.165:9200/',
    // 'elasticsearch2:9200'
  ]
});


client.cluster.health(function (err, resp) {
  if (err) {
    console.error(err.message);
  } else {
    console.dir(resp);
  }
});


// client.index({
//   index: 'blog',
//   type: 'post',
//   id: 2,
//   body: {
//     title: 'JavaScript Everywhere!',
//     content: 'It all started when...',
//     date: '2013-12-17'
//   }
// }, function (err, resp) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.dir(resp);
//   }
// });

// client.search({
//   index: 'blog',
//   size: 1,
//   // body: {
//   //   query: {
//   //     match: {
//   //       title: 'JavaScript Everywhere!'
//   //     }
//   //   }
//   // }
// }).then(function (resp) {
//   console.log('stuff returned',resp.hits.hits)
//   // var hits = resp.body.hits;
// });


module.exports = client;