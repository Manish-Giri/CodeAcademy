// A component can do more than just read its own state. A component can also change its own state.

// A component changes its state by calling the function this.setState.

// this.setState takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.

// In the code editor, take a look at Example.js. Notice that <Example /> has a state of:

// {
//   mood:   'great',
//   hungry: false
// }
// Now, let's say that <Example /> were to call:

// this.setState({ hungry: true });
// After that call, here is what <Example />'s state would be:

// {
//   mood:   'great',
//   hungry: true
// }
// The mood part of the state remains unaffected!

// this.setState takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

var Example = React.createClass({
  getInitialState: function () {
    return {
      mood:   'great',
      hungry: false
    };
  },

  render: function () {
    return <div></div>;
  }
});

<Example />
