var React = require('react');

var linkContent = {
  ranking: 2, 
  imgLink: 'http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg',
  name: 'Even the meerkats at this UK zoo agree; its bloody freezing today.',
  contentLink: '',
  submitionTime: '2015-02-24T21:52:11.142Z',
  numberOfComments: 1100,
  submittedUserName: 'awesomeUser',
  usernameLink: ''
};


var LinkContent = React.createClass({
  render: function (){
    return (
      <li className='links'>
        <div className='ranking'>
          {linkContent.ranking}
        </div>
        <img className='linkImg' src={linkContent.imgLink}/>
        <div className='outer-content'>
          <div className='content-text'>
            <div className='content-title'>
              <a className='title-text' href={linkContent.contentLink}>
                {linkContent.name}
              </a>
            </div>
            <div className="submitionTime" >
              submitted at {linkContent.submitionTime} ago by <span className='username'> 
                <a href={linkContent.usernameLink}>{linkContent.username}</a> 
              </span>
            </div>
            <div className="content-share">
                {linkContent.numberOfComments} comments   share
            </div>
          </div>
        </div>
      </li>
    )
  }
});



module.exports = LinkContent;