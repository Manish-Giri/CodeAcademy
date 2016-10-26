// Great! You just made a stateful component class named Parent.
//
// Now, let's make our stateless component class.
// 1.
// Select Child.js.
//
// On line 1, require the React.js library. Store the library in a variable named React.
//
// Leave line 2 blank. On line 3, declare a new variable named Child. Child will store your stateless component class.
//
// Set Child equal to React.createClass(). Pass an object to React.createClass(). Give the object this property:
//
// render: function () {
//   return <h1></h1>;
// }
// 2.
// Child is going to receive a prop called name, and display that prop on the screen.
//
// How can you make a component display a prop called name?
//
// To access a prop, use the expression this.props.name-of-prop.
// To make a component display something, include that thing in the render function's return statement.
// You need to include this.props.name inside of Child's render function's return statement.
//
// Add this expression in between the <h1></h1> tags:
//
// Hey, my name is {this.props.name}!
// 3.
// A <Parent /> is going to pass a prop to a <Child />.
//
// That means that a <Parent /> is going to render a <Child />. Rendering is the only way for a component to pass props to another component.
//
// That means that Child.js needs to use module.exports. Any component rendered by a different component must be included in module.exports.
//
// At the bottom of Child.js, add:
//
// module.exports = Child;
// 4.
// That's it! Child is ready to inherit a prop and display it.
var React = require('react');

var Child = React.createClass({
  render: function () {
  return <h1>Hey, my name is {this.props.name}!</h1>;
}
});

module.exports = Child;
