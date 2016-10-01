// Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!
//
// You can do more with props than just display them. You can also use props to make decisions.
//
// In the code editor, look at the Welcome component class.
//
// You can tell from this.props.name on line 5 that Welcome expects to receive a piece of information called name. However, Welcome never renders this piece of information! Instead, it uses the information to make a decision.
//
// <Welcome /> instances will render the text WELCOME "2" MY WEB SITE BABYYY!!!!!, unless the user is Mozart, in which case they will render the more respectful
// hello sir it is truly great to meet you
// here on the web.
//
// The passed-in name is not displayed in either case! The name is used to decide what will be displayed. This is a common technique.
//
// Select Home.js and look a the Home component class. What will <Welcome /> render to the screen?

var React = require('react');

var Welcome = React.createClass({
  render: function () {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
});

module.exports = Welcome;
