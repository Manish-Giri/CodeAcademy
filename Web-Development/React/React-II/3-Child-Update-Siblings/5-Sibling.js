/**
 * Created by manishgiri on 10/31/2016.
 */

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
