var React = require('react');
var LinkContent = require('./LinkContent')



var ContentList = React.createClass({

  getInitialState: function(){
    return {
      sources: [{
        ranking: 2, 
        imgLink: 'http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg',
        name: 'Even the meerkats at this UK zoo agree; its bloody freezing today.',
        contentLink: '',
        submitionTime: '2015-02-24T21:52:11.142Z',
        numberOfComments: 1100,
        submittedUserName: 'awesomeUser',
        usernameLink: ''
      }]
    }
  },

  componentDidMount: function(){
    $.ajax({
      url: "/front"
    }).done(function(data){
      // console.log(data)
      var source;
      var l = [];
      // console.log(data.forEach)
      data.forEach(function(item){
        source = item._source; 
        source._id = item._id;
        l.push(source);
        //update state
        // console.log(source)
        // l.push(<LinkContent key = {item._id} source= {source}/>);
        // console.log(links)
      })
      this.setState({
        sources: l
      })
    }.bind(this))
    

  },

  render: function (){
    // get the data from ajax
    var links = [];
    for(var i = 0 ; i < 3; i++){
      links.push(<LinkContent source={this.state.sources[0]}/>)
    }
    links = this.state.sources.map(function(link){
      return (<LinkContent key={link._id} source={link} />)
    });

    return (
      <ul className='linkContainer' >
        {links}
      </ul>
    )
  }
});



module.exports = ContentList;