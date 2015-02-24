var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;




var FrontPage = React.createClass({
  render: function (){
    return (
      <div className='content'>
        <ul className='linkContainer'>
          <li className='links'>
            <div className='ranking'>
            2 
            </div>
            <img className='linkImg' src='http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg'/>
            <div className='outer-content'>
              <div className='content-text'>
                <div className='content-title'>
                  <a className='title-text' href="">
                    Even the meerkats at this UK zoo agree; its bloody freezing today.
                  </a>
                </div>
                <div className="submitionTime" >
                  submitted 4 hours ago by <span className='username'> <a href="">awesomeUser</a> </span>
                </div>
                <div className="content-share">
                    11100 comments   share
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='ranking'>
            2 
            </div>
            <img className='linkImg' src='http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg'/>
            <div className='outer-content'>
              <div className='content-text'>
                <div className='content-title'>
                  <a className='title-text' href="">
                    Even the meerkats at this UK zoo agree; its bloody freezing today.
                  </a>
                </div>
                <div className="submitionTime" >
                  submitted 4 hours ago by <span className='username'> <a href="">awesomeUser</a> </span>
                </div>
                <div className="content-share">
                    11100 comments   share
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='ranking'>
            2 
            </div>
            <img className='linkImg' src='http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg'/>
            <div className='outer-content'>
              <div className='content-text'>
                <div className='content-title'>
                  <a className='title-text' href="">
                    Even the meerkats at this UK zoo agree; its bloody freezing today.
                  </a>
                </div>
                <div className="submitionTime" >
                  submitted 4 hours ago by <span className='username'> <a href="">awesomeUser</a> </span>
                </div>
                <div className="content-share">
                    11100 comments   share
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>    
    )
  }
});


module.exports = FrontPage;