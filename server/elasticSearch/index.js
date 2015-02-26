var elasticsearch = require('elasticsearch')

var client = elasticsearch.Client({
  hosts: [
    'http://10.8.32.122:9200/',
    // 'http://10.131.155.165:9201/',
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
//   index: 'topic',
//   type: 'post',
//   // id: 2,
//   body: {
//     ranking: 1, 
//     imgLink: 'http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg',
//     name: 'TIL: life is better with JS',
//     contentLink: '',
//     submitionTime: '2015-02-25T22:02:23.731Z',
//     numberOfComments: 10,
//     submittedUserName: 'awesomeUser2',
//     usernameLink: ''
//   }
// }, function (err, resp) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.dir(resp);
//   }
// });

// client.search({
//   index: 'topic',
//   size: 50,
//   id: 'AUvCwjmiQMlGKUpucNQ7'
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