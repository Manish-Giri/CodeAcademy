// Great work! You just passed information from a stateful component to a stateless component. You will be doing a lot of that.
//
// You learned earlier that a component can change its state by calling this.setState. You may have been wondering: how does a component change its props?
//
// The answer: it doesn't!
//
// A component should never update this.props. Look at Bad.js to see an example of what not to do.
//
// This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?
//
// A React component should use props to store information that can be changed, but can only be changed by a different component.
//
// A React component should use state to store information that the component itself can change.
//
// If that's a bit confusing, don't worry! The next two lessons will be examples.
var React = require('react');

var Bad = React.createClass({
  render: function () {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
});
