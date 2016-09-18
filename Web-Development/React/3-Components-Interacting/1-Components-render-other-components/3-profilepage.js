var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="./selfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage/>, document.getElementById('app'));
