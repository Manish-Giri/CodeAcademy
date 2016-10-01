// Let's talk about naming things.

// When you pass an event handler as a prop, as you just did, there are two names that you have to choose.

// Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

// The first name that you have to choose is the name of the event handler itself.

// Look at Talker.js, lines 6 through 11. This is our event handler. We chose to name it talk.

// The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.

// For our prop name, we also chose talk, as shown on line 14:

// return <Button talk={this.talk} />;
// These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention but you should understand it when you see it.

// Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."

// If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:

// React.createClass({
//   handleHover: function () {
//     alert('I am an event handler.');
//     alert('I will be called in response to "hover" events.');
//   }
// });
// Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:

// React.createClass({
//   handleHover: function () {
//     alert('I am an event handler.');
//     alert('I will listen for a "hover" event.');
//   },

//   render: function () {
//     return <Child onHover={this.handleHover} />;
//   }
// });
// 1.
// In Talker.js on line 6, change the event handler's name from talk to handleClick.
// 2.
// In Talker's render function, change the prop's name from talk to onClick.

// Change the prop's value to reflect the fact that the event handler is now named handleClick, not talk.
// 3.
// Select Button.js.

// Change Button's render function so that it expects a prop named onClick, instead of a prop named talk.
// 4.
// One major source of confusion is that the name onClick has special meaning, but only when it's used on HTML-like elements.

// Look at Button.js. When you give a <button></button> an attribute named onClick, then the name onClick has special meaning. As you've learned, this special onClick attribute creates an event listener, listening for clicks on the <button></button>:

// // Button.js

// // The attribute name onClick
// // creates an event listner:
// <button onClick={this.props.onClick}>
//   Click me!
// </button>
// Now look at Talker.js. Here, when you give <Button /> an attribute named onClick, then the name onClick doesn't do anything special. The name onClick does not create an event listener when used on <Button /> - it's just an arbitrary attribute name:

// // Talker.js

// // The attribute name onClick
// // is just a normal attribute name:
// <Button onClick={this.handleClick} />
// The reason for this is that in <Button /> is not an HTML-like JSX element; it's a component instance.

// Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.handleClick}/>;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

