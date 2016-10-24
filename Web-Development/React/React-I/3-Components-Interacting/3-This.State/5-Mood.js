// The most common way to call this.setState is to call a custom function that wraps a this.setState call. makeSomeFog is an example:
//
// var Example = React.createClass({
//   getInitialState: function () {
//     return { weather: 'sunny' };
//   },
//
//   makeSomeFog: function () {
//     this.setState({
//       weather: 'foggy'
//     });
//   }
// });
// Let's walk through how a function wrapping this.setState might work in practice. In the code editor, read Mood.js all the way through.
//
// Here is how a <Mood />'s state would be set:
//
// A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).
// The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).
// When this listened-for event occurs, it calls an event handler function (in this case this.toggleMood, called on line 20 and defined on lines 11-14).
// Inside of the body of the event handler, this.setState is called (in this case on line 13).
// The component's state is changed!
// Look at the statement on line 12. What does that do?
//
// Line 12 sets a variable named newMood equal to the opposite of this.state.mood. If this.state.mood is "good", then newMood will be "bad," and vice versa.
//
// A <Mood /> instance would display "I'm feeling good!" along with a button. Clicking on the button would change the display to "I'm feeling bad!" Clicking again would change back to "I'm feeling good!," etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.
//
// One final note: you can't call this.setState from inside of the render function! We'll explain why in the next exercise.
var React = require('react');
var ReactDOM = require('react-dom');

var Mood = React.createClass({
  getInitialState: function () {
    return {
      mood: 'good'
    };
  },

  toggleMood: function () {
    var newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  },

  render: function () {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Mood />, document.getElementById('app'));
