/**
 * Created by manishgiri on 10/31/16.
 */

/*
Great work! Stateless components updating their parents' state is a React pattern that you'll see more and more. Learning to recognize it will help you understand how React apps are organized.

    There's something strange going on, though!

Take a look at changeName. You can see that it calls this.setState.

    In order for changeName to work, the "this" in this.setState must be the instructions object of the Parent class. You're trying to set a <Parent />'s state, not some other type of component's state.

The meaning of this is determined when a function is called, not when when a function is defined. changeName is called by an event listener... on a <Child />. Shouldn't that make this point to the instructions object of the Child class, instead of the Parent class?

You'd think that it would! Fortunately it doesn't happen that way, thanks to some React magic called automatic binding.

    Automatic binding allows you to pass functions as props, and any this values in the functions' bodies will automatically refer to whatever they referred to when the function was defined. No binding to worry about!

If you're ou can learn more about automatic binding here. Click Next to move on to the final version of our programming pattern!*/

var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');

var Parent = React.createClass({
    getInitialState: function () {
        return { name: 'Frarthur' };
    },

    changeName: function(newName) {
        this.setState({
            name: newName
        });
    },

    render: function () {
        return (
            <Child
                name={this.state.name} onChange={this.changeName} />
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
