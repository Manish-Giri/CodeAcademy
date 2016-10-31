/**
 * Created by manishgiri on 10/31/16.
 */
var React = require('react');

var Child = React.createClass({
    render: function () {
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names">
                    <option value="Frarthur">
                        Frarthur
                    </option>

                    <option value="Gromulus">
                        Gromulus
                    </option>

                    <option value="Thinkpiece">
                        Thinkpiece
                    </option>
                </select>
            </div>
        );
    }
});

module.exports = Child;
