/**
 * Created by manishgiri on 10/31/16.
 */
/*
In the last exercise, you defined a function in Parent that can change Parent's state.

Parent must pass this function down to Child, so that Child can use it in an event listener on the dropdown menu.
1.
Pass changeName down to Child!

    In Parent.js, inside of Parent's render function, add a second attribute to <Child />. Give this attribute a name of onChange, and a value of the changeName function.*/

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
