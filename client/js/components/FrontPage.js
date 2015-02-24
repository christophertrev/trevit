var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ContentList = require('./ContentList')




var FrontPage = React.createClass({
  render: function (){
    return (
      <div className='content'>
        <ContentList />
      </div>    
    )
  }
});


module.exports = FrontPage;