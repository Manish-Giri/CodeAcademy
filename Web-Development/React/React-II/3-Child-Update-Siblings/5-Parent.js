/**
 * Created by manishgiri on 10/31/2016.
 */
/*
You just executed your first complete React programming pattern!

    Let's review. Follow each step in the code editor:

A stateful component class defines a function that calls this.setState. (Parent.js, lines 11-15)
The stateful component passes that function down to a stateless component. (Parent.js, line 20)
That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js, lines 4-7)
The stateless component class uses this new function as an event handler. (Child.js, line 14)
When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)
The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js, line 21)
That stateless component class receives the state and displays it. (Sibling.js, lines 8-10)
An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the (Parent.js, lines 27-30)
This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.

    Being introduced to this pattern is your first step towards understanding how React apps fit together! You'll get more practice using it throughout this course, as well as in the course after this one*/

var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');
var Sibling = require('./Sibling');

var Parent = React.createClass({
    getInitialState: function () {
        return { name: 'Frarthur' };
    },

    changeName: function (newName) {
        this.setState({
            name: newName
        });
    },

    render: function () {
        return (
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
