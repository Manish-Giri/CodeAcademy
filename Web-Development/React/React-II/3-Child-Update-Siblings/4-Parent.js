/**
 * Created by manishgiri on 10/31/2016.
 */
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
