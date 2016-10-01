// Select Greeting.js.
//
// Look in Greeting's render function. You can see that Greeting now expects two props: name and signedIn.
//
// Notice that this.props.signedIn is not located inside of a return statement. This means that Greeting will never display the value of "signedIn." But Greeting will use that value to decide whether to display a friendly greeting or "GO AWAY."
//
// Look at Greeting until you feel like you understand how it works, and then open App.js.
//
// Inside of App's render function, on line 12, pass <Greeting /> a second prop of signedIn={false}.
// 2.
// How rude! I mean, honestly.
//
// In App.js, change the value of signedIn to make <Headline /> display a friendly greeting again.
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
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
