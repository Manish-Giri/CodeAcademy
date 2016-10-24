// Great! You just passed a function from <Talker /> to <Button />.

// In the code editor, select Button.js. Notice that Button renders a <button></button> element.

// If a user clicks on this <button></button> element, then you want your passed-in talk function to get called.

// That means that you need to attach talk to the <button></button> as an event handler.

// How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute's name should be something like onClick or onHover. The attribute's value should be the event handler that you want to attach.
// 1.
// In Button.js, add an onClick attribute to the render function's <button></button>.

// The onClick attribute's value should be the passed-down talk function. Since you named your prop talk in the last exercise, you can access this prop via this.props.talk.

// Click Run. Once the browser refreshes, click on the button. Ew, how annoying!

var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
});

module.exports = Button;
