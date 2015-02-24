var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var tabItems = [
  'Front',
  'Hot',
  'Rising',
  'Magic'
];

var LogoBar = React.createClass({

  render: function (){
    var tabs = [];
    tabItems.map(function(item){
      var classes = 'choice'
      if ( item === 'Front'){
        classes = 'choice active';
      }
      tabs.push(
        <li className={classes}>
          {item}
        </li>
      )
    })

    return (
      <div className='logoBar'>
        <img className='logoImg' src="img/logo-nav.png"/>
        <div className='navTab'>
          <ul className='tabMenu'>
          {tabs}
          </ul>
        </div>
      </div>   
    )
  }
});


module.exports = LogoBar;