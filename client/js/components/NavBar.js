var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;




var Navbar = React.createClass({
  render: function (){
    return (
      <div className="navbar">
      <div className="subReddits">
        <div className="mySubs">MY SUBREDDITS</div>

        <div className="moreSubs">More>></div>
        <ul className="orderby">
          <li className="orderbyItem">Front</li>
          <li className="orderbyItem">All</li>
          <li className="orderbyItem">Random</li>
        </ul>
        <ul className="listSubReddits">
            <li className="subReddit active">
              Front
            </li>
            <li className="subReddit">
              2ndSub
            </li>
            <li className="subReddit">
              3ndSub
            </li>
            <li className="subReddit">
              another sub
            </li>
        </ul>
      </div>      
    </div>
    )
  }
});


module.exports = Navbar;