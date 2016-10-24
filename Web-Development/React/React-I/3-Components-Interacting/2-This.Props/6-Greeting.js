var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
});

module.exports = Greeting;
