// There's something odd about all of this.
//
// Look again at Toggle.js.
//
// When a user clicks on the <button></button>, the changeColor function is called. Take a look at changeColor.
//
// changeColor calls this.setState, which updates this.state.color. However, even if this.state.color changes from green to yellow, that alone doesn't make the screen's color change!
//
// The screen's color doesn't change until Toggle renders.
//
// Inside of the render function, it's this line:
//
// <div style={{background:this.state.color}}>
// that changes a virtual DOM object's color to the new this.state.color, eventually causing a change in the screen.
//
// If you call changeColor, shouldn't you then also have to call render again? changeColor only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven't re-rendered the component?
//
// Here's why: Any time that you call this.setState, this.setState AUTOMATICALLY calls render as soon as the state has changed.
//
// Think of this.setState as actually being two things: this.setState, immediately followed by render.
//
// That is why you can't call this.setState from inside of the render function! this.setState automatically calls render. If render calls this.setState, you will create an infinite loop.
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
