// A <Parent /> is supposed to pass its state to a <Child />.
//
// Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.
// Instructions
// 1.
// Select Parent.js. On line 3, declare a new variable named Child.
//
// Set Child equal to a require() call. Use require() to import the Child component class.
//
// Parent.js and Child.js share the same parent directory.
// 2.
// Great! Now Parent is ready to pass its state to a <Child />.
//
// Inside of Parent's render function's return statement, get rid of the <div></div>.
//
// Replace it with a <Child /> instance.
//
// Give <Child /> an attribute with a name of name. The attribute's value should the name property stored in this.state.
// 3.
// All that's left is to render your components!
//
// At the bottom of Parent.js, call ReactDOM.render();.
//
// For ReactDOM.render's first argument, pass in <Parent />.
//
// For ReactDOM.render's second argument, pass in document.getElementById('app').
//
// Rendering <Parent /> will render both components, because Parent's render function returns a <Child />. Click Run, and see the rendered information that you passed down from Parent
var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child.js');


var Parent = React.createClass({
  getInitialState: function() {
    return { name: 'Frarthur' };
  },
  render: function () {
  return <Child name={this.state.name} />;
}
});

ReactDOM.render(<Parent />, document.getElementById('app'));
