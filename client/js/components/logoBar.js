var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;




var LogoBar = React.createClass({
  render: function (){
    return (
      <div className='logoBar'>
        <img className='logoImg' src="img/logo-nav.png"/>
        <div className='navTab'>
          <ul className='tabMenu'>
            <li className='choice active'>
              Front
            </li>
            <li className='choice'>
              Hot
            </li>
            <li className='choice'>
              Rising
            </li>
            <li className='choice'>
              Magic
            </li>
          </ul>
        </div>
      </div>   
    )
  }
});


module.exports = LogoBar;