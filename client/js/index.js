var React = require('react');
var Router = require('react-router');
var Route = Router.Route
var RouteHandler = Router.RouteHandler;
var DefaultRoute  = Router.DefaultRoute;

//Components 

var FrontPage = require('./components/FrontPage')
var MainApp = require('./components/MainApp');



// <Route handler={App}>
//   <Route name="login" handler={Login}/>
//   <Route name="logout" handler={Logout}/>
//   <Route name="about" handler={About}/>
//   <Route name="dashboard" handler={Dashboard}/>
// </Route>


var routes = (
 <Route handler={MainApp}>
  <DefaultRoute handler={FrontPage}/>
 </Route>
);


Router.run(routes, Router.HistoryLocation,function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});