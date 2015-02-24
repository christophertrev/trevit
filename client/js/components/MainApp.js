var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var NavBar = require('./NavBar');
var LogoBar = require('./LogoBar');




var MainApp = React.createClass({
  render: function (){
    return (
      <div>
        <NavBar/>
        <LogoBar/>
        <RouteHandler/>
      </div>      
    )
  }
});

module.exports = MainApp;