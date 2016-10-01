// Good! You've defined a new function on the Talker component class. Now you're ready to pass that function to another component.

// You can pass a function in the exact same way that you pass any other information. Behold, the mighty JavaScript.
// 1.
// Select Talker.js.

// You want to pass talk from here to <Button />.

// If you want to pass any prop to <Button />, that means that you need to give <Button /> an attribute. Let's start there.

// Inside of Talker's render function, give <Button /> the following attribute:

// foo="bar"
// During the next two checkpoints, you'll replace those values with the values that you need! Keep them as foo and "bar" for now.
// 2.
// Your goal is to pass talk from <Talker /> to <Button />.

// What prop name should you choose?

// It doesn't really matter! prop attributes will work with just about any name, so long as the name follows the JavaScript variable name rules.

// Since you're going to pass a function named talk, you might as well use talk as your name. Inside of the render function, change your attribute name from foo to talk.
// 3.
// What should your prop value be?

// Your prop value should be the information that you want to pass! In this case, you want to pass the talk function.

// Inside of the render function, change your attribute's value to talk. HINT: you will need to use both curly braces and this in order to successfully access talk.

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  talk: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button talk={this.talk}/>;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

