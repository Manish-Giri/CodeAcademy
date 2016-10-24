// You can, and often will, pass functions as props. It is especially common to pass event handler functions.
//
// In the next lesson, you will pass an event handler function as a prop. However, you have to define an event handler before you can pass one anywhere. In this lesson, you will define an event handler function.
//
// How do you define an event handler in React?
//
// You define an event handler as a property on the instructions object, just like the render function. Almost all functions that you define in React will be defined in this way, as instructions object properties.
//
// Take a look in the code editor. An event handler function is defined on lines 5 through 9, and is then attached to an event on line 13.
var React = require('react');

var Example = React.createClass({

  handleEvent: function () {
    alert('I am an event handler.'
    + '  If you see this message,'
    + ' then I have been called.');
  },

  render: function () {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
});
