// You have learned how to pass a prop to a component:

// <Greeting firstName="Esmerelda" />
// You have also learned how to access and display a passed-in prop:

// render: function () {
//   return <h1>{this.props.firstName}</h1>;
// }
// The most common use of props is to pass information to a component, from a different component. You haven't done that yet, but it's very similar to what you've seen already.

// In this exercise, you will pass a prop from one component to another.

// A curmudgeonly clarification about grammar:
// You may have noticed some loose usage of the words prop and props. Unfortunately this is pretty inevitable.

// props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is also called a prop. props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information. :(
// 1.
// Your mission is to pass a prop to a <Greeting /> component instance, from an <App /> component instance.

// If <App /> is going to pass a prop to <Greeting />, then it follows that <App /> is going to render <Greeting />.

// Since <Greeting /> is going to be rendered by another component, that means that <Greeting /> needs to use module.exports.

// In Greeting.js, delete this statement from line 2:

// var ReactDOM = require('react-dom');
// At the bottom of Greeting.js, remove the entire call to ReactDOM.render, and replace it with this:

// module.exports = Greeting;
// 2.
// <App /> can't pass a prop to <Greeting /> until App.js imports the variable Greeting! Until then, the characters <Greeting /> in App.js might as well be nonsense.

// Select App.js. Create a new line underneath the line var ReactDOM = require('react');.

// On your new line, require the Greeting component class. Save the result in a variable named Greeting.
// 3.
// In App.js, add a <Greeting /> instance to App's render function, immediately underneath the <h1></h1>.

// Give <Greeting /> an attribute with a name of "name." The attribute's value can be whatever you'd like.

// When you click Run, <App /> will render <Greeting />, and pass it a prop

var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name = "somename"/>
        
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

