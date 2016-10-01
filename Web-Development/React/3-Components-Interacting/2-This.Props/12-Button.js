// Take a look at the Button component class.

// Notice that on line 8, Button expects to receive a prop named text. The received text will be displayed in a <button></button> element.

// What if nobody passes any text to Button?

// If nobody passes any text to Button, then Button's display will be blank. It would be better if Button could display a default message instead.

// You can make this happen by writing a function named getDefaultProps:

// var Example = React.createClass({

//   getDefaultProps: function () {},

//   render: function () {
//     return <h1>{this.props.text}</h1>;
//   }
// });
// The getDefaultProps function should return an object:

// var Example = React.createClass({

//   getDefaultProps: function () {
//     // Return an object:
//     return {};
//   },

//   render: function () {
//     return <h1>{this.props.text}</h1>;
//   }
// });
// Inside of this returned object, write properties for any default props that you'd like to set:

// var Example = React.createClass({
//   getDefaultProps: function () {
//     return { text: 'yo' };
//   },

//   render: function () {
//     return <h1>{this.props.text}</h1>;
//   }
// });
// If an <Example /> doesn't get passed any text, then it will display "yo."

// If an <Example /> does get passed some text, then it will display that passed-in text.
// 1.
// Click Run.

// What a sad, textless button! :(
// 2.
// Inside of the object passed to React.createClass, before the render function, define a getDefaultProps function. Use the example code as a guide. Don't forget to separate it from render with a comma!

// In object that is returned by getDefaultProps, set text's default value equal to 'I am a button'.

// The button's appearance should change. Much better!
// 3.
// In the ReactDOM.render call, give <Button /> the following attribute:

// text=""
// Your new prop sh

var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  getDefaultProps: function() {
    return {text: "I am a button"};
  },
  render: function () {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
});

ReactDOM.render(
  <Button  text=""/>, 
  document.getElementById('app')
);

