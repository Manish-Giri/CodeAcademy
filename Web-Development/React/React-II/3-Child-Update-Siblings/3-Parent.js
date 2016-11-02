/**
 * Created by manishgiri on 10/31/2016.
 */
/*
Look at Parent.js in the code editor.

    Three things have changed in this file since the last Lesson:

    Sibling has been required on line 4.
A <Sibling /> instance has been added to the render function on line 23.
<Sibling /> and <Child /> have been wrapped in a <div></div>, since JSX expressions must have one outer element.
1.
Sibling's job is to display the selected name.

That name is stored in Parent's state. Parent will have to pass the name to Sibling, so that Sibling can display it.

In Parent's render function, pass the name to <Sibling />:

name={this.state.name}
2.
Child's job is to offer a way to change the chosen name. Not to display it!

In Parent.js, look at lines 21 and 22.

You are passing Child two pieces of dynamic information:

    The chosen name (this.state.name).
    A way to change the chosen name (this.changeName).
    One of those is now unnecessary!

    Remove an attribute from <Child />, so that it receives a way to change the chosen name and nothing more.*/

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
