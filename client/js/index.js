var React = require('react');
var Router = require('react-router');
var Route = Router.Route
var RouteHandler = Router.RouteHandler;
var DefaultRoute  = Router.DefaultRoute;

//Components 
var FrontPage = require('./components/FrontPage')
var MainApp = require('./components/MainApp');

//Routes
var routes = (
 <Route handler={MainApp}>
  <DefaultRoute handler={FrontPage}/>
 </Route>
);


Router.run(routes, Router.HistoryLocation,function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});