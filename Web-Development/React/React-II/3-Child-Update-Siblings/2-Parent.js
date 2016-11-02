/**
 * Created by manishgiri on 10/31/2016.
 */

/*
One of the very first things that you learned about components is that they should only have one job.

    In the last lesson, Child had two jobs:

    1 - Child displayed a name.

2 - Child offered a way to change that name.

    You should make like Solomon and divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.

    In the code editor, select Child.js. Notice that these lines have vanished:

    <h1>
        Hey, my name is {this.props.name}!
    </h1>
The new version of Child renders a dropdown menu for changing the name, and that's it.

Select Sibling.js in the code editor.

    Read through the render function's return statement.

Here, the name is displayed! Or at least it will be displayed, once you've done a little editing.

That brings us to the essential new concept for this lesson: you will have one stateless component display information, and a different stateless component offer the ability to change that information.
    Instructions
1.
Click Run.

    Select Parent.js, and look at the rendered <Parent /> in the browser. Try selecting a name from the dropdown menu. Does it work?*/
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
                <Child

                    onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
