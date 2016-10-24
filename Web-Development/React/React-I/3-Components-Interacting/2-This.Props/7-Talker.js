// Select Talker.js.
//
// Here we have a nice a function named talk that alerts ten thousand "blah"s to your screen. You will eventually use talk as an event handler.
//
// There's a problem: talk is defined outside of the Talker component class. That's not how we do things here in React-land!
//
// Rewrite talk, so that it is a property of the object passed to React.createClass.
//
// Look at Example.js if you get stuck! Don't forget to separate talk and render with a comma.
//
// Once you're done, delete the original talk function before clicking Run.
var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');


var Talker = React.createClass({
  talk:  function () {
  for (var speech = '', i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
},
  render: function () {
    return <Button />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
