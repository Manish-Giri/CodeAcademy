/**
 * Created by manishgiri on 10/31/2016.
 */
/*

You're on the last step!

You've passed the name down to <Sibling /> as a prop. Now <Sibling /> has to display that prop.
1.
Select Sibling.js.

    Notice that Sibling doesn't use any dynamic information at all. Every time that Sibling renders, it will always look exactly the same. That's not what you want!

    On line 5, declare a new variable called name. Set name equal to this.props.name. You'll use it in the next checkpoint.
2.
Inside of the render function's return statement, there are three instances of the word Frarthur.

You want to replace each instance of Frarthur with whatever the chosen name is.

    Replace each Frarthur with {name}. Click Run. Try selecting a new name from the dropdown menu.*/

var React = require('react');

var Sibling = React.createClass({
    render: function () {
        var name = this.props.name;
        return (
            <div>
                <h1>Hey, my name is {name}!</h1>
                <h2>Don't you think {name} is the prettiest name ever?</h2>
                <h2>Sure am glad that my parents picked {name}!</h2>
            </div>
        );
    }
});

module.exports = Sibling;
