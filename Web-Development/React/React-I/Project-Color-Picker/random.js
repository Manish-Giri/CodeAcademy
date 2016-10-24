// Take a look at the Random component class. Random's job is to store a random color, and to use that color to update the screen's background.

// First, let's store this random color as state.

// Give Random a getInitialState function. getInitialState should return this object:

// { color: [x, y, z] }
// Instead of x, y, and z, use three numbers between 0 and 255.
// Stuck? Get a hint
// 2.
// Good!

// Change the three numbers inside of getInitialState to three different numbers. Click Save. The background color should change!
// 3.
// It would be nice to know what color we're looking at!

// In the render function, inside of the <h1></h1>, add the text, Your color is ___.

// Instead of ___, access this.state.color!
// Stuck? Get a hint
// 4.
// That's not a very friendly way to display a color!

// In Random, find the method named formatColor. This method transforms an rgb array into something a bit more readable.

// Inside of the <h1></h1>, instead of simply using this.state.color, call the formatColor function and pass in this.state.color as an argument.
// Stuck? Get a hint
// 5.
// That's better!

// A user should be able to click on a button to pick a new random color. In the code editor, you can see a Button.js file. That will be your button!

// Select Button.js. At the bottom of the file, set module.exports equal to the Button component class.
// Stuck? Get a hint
// 6.
// Good! Now you can import Button.js into Random.js, and you'll get the Button component class that you want.

// Select Random.js. Near the top of the file, create a new line after var ReactDOM = require('react-dom');.

// On this new line, use require to import the Button component class. Store this component class in a variable named Button.

// Button.js and Random.js share the same parent directory.
// Stuck? Get a hint
// 7.
// Now you're ready to render a <Button /> instance!

// Inside of Random's render function, after the <h1></h1>, add a <Button />.

// Give your <Button /> this attribute:

// light={this.isLight()}
// Stuck? Get a hint
// 8.
// You can see your <Button /> instance in the browser. However, clicking it doesn't do anything!

// You need to define an event handler that updates this.state.color to a new random color.

// Give Random a new property named handleClick. Set handleClick equal to a function.

// Inside of handleClick's body, call this.setState(). As an argument, pass this.setState() an object with the following property:

// color: this.chooseColor()
// Stuck? Get a hint
// 9.
// Great! this.handleClick will update this.state.color to a new, random color.

// Now that you've defined an event handler, you can pass it to another component as a prop. This is a pattern that you'll see much more of in the next course.

// In Random's render function, give <Button /> an attribute with a name of onClick. Set onClick's value equal to the handleClick function.
// Stuck? Get a hint
// 10.
// Only one more step!

// Select Button.js. In the render function, give the <button></button> an onClick attribute. Set onClick's value equal to the passed-in prop.
// Stuck? Get a hint
// 11.
// Try clicking the button a few times!

// If you tried to make sense of the built-in parts of Random, you may have come up confused. This is because Random includes two special functions that we haven't discussed yet: componentDidMount and componentDidUpdate.

// These functions are examples of a powerful React feature called lifecycle methods. You'll learn all about lifecycle methods in Introduction to React.js: Part II.

// BONUS: Notice that the <h1></h1>'s text is white if the screen's background is a darker color, but the text is black is the screen's background is a lighter color. Similarly, the <button></button> changes colors based on whether the background is dark or light. Can you figure out how that works?

var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Random = React.createClass({
  getInitialState: function() {
    return {color: [200, 50, 190]};
  },
  
  componentDidMount: function () {
    this.applyColor();
  },

  componentDidUpdate: function (prevProps, prevState) {
    this.applyColor();
  },

  formatColor: function (ary) {
    return 'rgb(' + ary.join(', ') + ')';
  },

  isLight: function () {
    var rgb = this.state.color;
    return rgb.reduce(function(a,b){ return a+b; }) < 127 * 3;
  },

  applyColor: function () {
    var color = this.formatColor(this.state.color);
    document.body.style.background = color;
  },

  chooseColor: function () {
    for (var i = 0, random = []; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random; 
  },
  
	handleClick: function() {
    this.setState({
      color: this.chooseColor()
    });
  },

  render: function () {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
				Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);

