/**
 * Created by manishgiri on 10/31/16.
 */
/*
You just passed a function down to Child that can change Parent's state!
1.
Select Child.js.

    If a user selects a new name from the dropdown menu, then you want Child to call changeName. changeName will change the parent's this.state.name, which will change the name displayed in the <h1></h1>.

Inside of Child's render function, give <select> a new attribute.

Make the attribute's name onChange. This will create an event listener.

Make the attribute's value equal to the function that you passed in from Parent.js. If you can't remember what prop name you used, then check Parent's render function.
2.
Try selecting a new name from the dropdown menu.

    It doesn't work! Why not? Take another look at this.props.onChange:

changeName: function (newName) {
    this.setState({
        name: newName
    });
}
This function needs to be passed a new name as an argument, in order to work properly.

    When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! Instead of passing a new name, it will pass an event object, as all event listeners do.

This is a common problem when passing down an event handler in React! The solution is to define another function.

This new function should take an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name! It sounds like a lot, but you will see this happen so often that it will soon feel intuitive.

    In Child.js, before the render function, define a new function that can be passed an event object:

    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

render: function () { ...
    3.
    You've defined a new function that can take an event object, and use it to correctly update the parent's state. Now let's put that new function to use!

    In Child's render function, change the event handler from {this.props.onChange}, to {this.handleChange}.

    Click Run, and try selecting some different names from the dropdown menu. It should work!*/


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

