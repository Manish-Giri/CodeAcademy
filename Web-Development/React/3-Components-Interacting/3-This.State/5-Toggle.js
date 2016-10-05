// In the code editor, select Toggle.js.
//
// Before the render function, give Toggle a getInitialState function.
//
// getInitialState should return this object: { color: green }. Use the example as a guide.
//
// Don't put green in quotes! green should not be a string, it should be a reference to the variable declared on line 4.
// 2.
// Inside of Toggle's render function, give the <div></div> the following attribute:
//
// style={{background: this.state.color}}
// Make sure to include the double curly braces! We'll explain those in Introduction to React.js Part II.
// 3.
// On line 2, require the ReactDOM library and store it in a variable named ReactDOM.
//
// At the bottom of the file, render <Toggle /> using ReactDOM.render.
//
// Click Run and see if the background color reflects the state.
// 4.
// In between getInitialState and render, define a new function named changeColor.
//
// changeColor should set the state's color to yellow if it's currently green, and vice versa. HINT: toggleMood in Mood.js is a good place to look for help.
// 5.
// In Toggle.js in the render function, underneath the <h1></h1>, add this JSX element:
//
// <button>
//   Change color
// </button>
// 6.
// Now let's make the button actually work!
//
// Give the <button></button> an onClick attribute with a value of {this.changeColor}.
//
// Hit Run and let the browser refresh. Does clicking on the button change the color?




var React = require('react');
var ReactDOM = require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState: function() {
    return {color: green};
  },

  changeColor: function() {
    var newColor = this.state.color === green ? yellow: green;
    this.setState({color: newColor});
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
});

ReactDOM.render(<Toggle />, document.getElementById('app'));
