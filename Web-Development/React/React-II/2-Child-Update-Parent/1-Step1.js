/**
 * Created by manishgiri on 10/31/16.
 */
/*In the last lesson, you passed information from a stateful, parent component to a stateless, child component.

    In this lesson, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

Here's how that works:

1

The parent component class defines a function that calls this.setState.

    For an example, look in Step1.js at the handleClick function.

2

Once the parent has defined a function that updates its state, the parent then passes that function down to a child.

    Look in Step2.js, at the prop on line 21.

3

The child receives the passed-down function, and uses it as an event handler.

    Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.

Click through the three files in order, and try to follow their chronology. Whenever you're ready, click Next and we'll build an example!*/

var React = require('react');
var ReactDOM = require('react-dom');
var ChildClass = require('./ChildClass');

var ParentClass = React.createClass({
    getInitialState: function () {
        return { totalClicks: 0 };
    },

    handleClick: function () {
        var total = this.state.totalClicks;

        // calling handleClick will
        // result in a state change:
        this.setState(
            { totalClicks: total + 1 }
        );
    }
});