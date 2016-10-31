/**
 * Created by manishgiri on 10/31/16.
 */
/*To make a child component update its parent's state, the first step is something that you've seen before: you must define a state-changing function on the parent.
1.
Select Child.js.

    Look at Child's render function. It's similar to the last lesson, but you can see a <select> dropdown menu that wasn't there before.

Click Run. Try selecting different names from the dropdown menu in the browser.

    It doesn't work! When you select a name, that name is supposed to replace "Frarthur" on the screen.

Look at line 8. Notice that the name inside of the <h1></h1> is equal to this.props.name. In order to make the dropdown menu change the <h1></h1>, you will need the dropdown menu to change the value of this.props.name!
    2.
How can you change Child's this.props.name?

Open Parent.js and look at lines 12 and 13.

Parent renders a <Child />, passing in a name prop. This name prop is the same value that the <Child /> displays in its <h1></h1>.

You need Child's dropdown menu to change Parent's this.state.name! That will cause <Child /> to get passed a new name prop, which will change the name displayed on the screen.

    In Parent.js, define a new function that can change this.state.name:

changeName: function (newName) {
    this.setState({
        name: newName
    });
},

render: function () { ...
    */

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
                name={this.state.name} />
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);
