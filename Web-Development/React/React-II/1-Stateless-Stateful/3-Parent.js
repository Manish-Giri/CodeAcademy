// Let's make a stateful component pass its state to a stateless component.
//
// To make that happen, you need two component classes: a stateful class, and a stateless class.
// 1.
// We'll build the stateful class first.
//
// On line 1 of Parent.js, require the React.js library. Store the library in a variable named React.
//
// On line 2, require the ReactDOM library. Store it in a variable named ReactDOM.
//
// Make lines 3 and 4 empty. You'll add code to line 3 later.
//
// On line 5, declare a new variable named Parent. Parent will store your stateful component class.
//
// Set Parent equal to React.createClass(). Pass an object to React.createClass(). Give the object this property:
//
// render: function () {
//   return <div></div>;
// }
// 2.
// Since Parent is supposed to be stateful, it will need a getInitialState function.
//
// Give Parent a getInitialState function that returns the following object:
//
// { name: 'Frarthur' }
// Don't forget to separate getInitialState and render with a comma!
var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child.js');


var Parent = React.createClass({
  getInitialState: function() {
    return { name: 'Frarthur' };
  },
  render: function () {
  return <div></div>;
}
});
