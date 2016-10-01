var React = require('react');
var ReactDOM = require('react-dom');
var Welcome = require('./Welcome');

var Home = React.createClass({
  render: function () {
    return <Welcome name='Ludwig van Beethoven' />;
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
