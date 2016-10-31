/**
 * Created by manishgiri on 10/31/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ChildClass = require('./ChildClass');

var ParentClass = React.createClass({
    getInitialState: function () {
        return { totalClicks: 0 };
    },

    handleClick: function () {
        var total = this.state.totalClicks;
        this.setState(
            { totalClicks: total + 1 }
        );
    },

    // The stateful component class passes down
    // handleClick to a stateless component class:
    render: function () {
        return (
            <ChildClass onClick={this.handleClick} />
        );
    }
});
