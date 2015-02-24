var React = require('react');
var LinkContent = require('./LinkContent')



var ContentList = React.createClass({

  render: function (){
    var links = [];
    for(var i = 0 ; i < 3; i++){
      links.push(<LinkContent/>)
    }
    return (
      <ul className='linkContainer'>
        {links}
      </ul>
    )
  }
});



module.exports = ContentList;