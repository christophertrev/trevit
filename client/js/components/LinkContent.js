var React = require('react');

// var linkContent = {
//   ranking: 2, 
//   imgLink: 'http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg',
//   name: 'Even the meerkats at this UK zoo agree; its bloody freezing today.',
//   contentLink: '',
//   submitionTime: '2015-02-24T21:52:11.142Z',
//   numberOfComments: 1100,
//   submittedUserName: 'awesomeUser',
//   usernameLink: ''
// };


var LinkContent = React.createClass({
  render: function (){
    // console.log('linkContent Props', this.props)
    var source = this.props.source;
    return (
      <li className='links'>
        <div className='ranking'>
          {source.ranking}
        </div>
        <img className='linkImg' src={source.imgLink}/>
        <div className='outer-content'>
          <div className='content-text'>
            <div className='content-title'>
              <a className='title-text' href={source.contentLink}>
                {source.name}
              </a>
            </div>
            <div className="submitionTime" >
              submitted at {source.submitionTime} ago by <span className='username'> 
                <a href={source.usernameLink}>{source.username}</a> 
              </span>
            </div>
            <div className="content-share">
                {source.numberOfComments} comments   share
            </div>
          </div>
        </div>
      </li>
    )
  }
});



module.exports = LinkContent;