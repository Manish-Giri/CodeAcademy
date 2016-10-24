// A React component can access dynamic information in two ways: props and state.

// Unlike props, a component's state is not passed in from the outside. A component decides its own state.

// To make a component have state, write a getInitialState function:

// var Example = React.createClass({
//   getInitialState: function () {
//     return { mood: 'decent' };
//   },

//   render: function () {
//     return <div></div>;
//   }
// });

// <Example />
// getInitialState should return an object, like in the example above.

// Look at the bottom of the above code. <Example /> has a state of { mood: 'decent' }.
// 1.
// In App.js, add a getInitialState function to the App component class.

// getInitialState should return the following object:

// { title: 'Best App' }
// Feel free to use the example code as a guide. Don't forget to separate getInitialState and render with a comma!

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function() {
   return { title: 'Best App' };
  },
  render: function () {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
});