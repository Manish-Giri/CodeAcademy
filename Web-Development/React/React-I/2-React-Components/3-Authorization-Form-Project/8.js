/**
 * Created by manishgiri on 9/17/16.
 */
/*
On lines 12 through 19, you can see a function named authorize.

    This function will check whether a submitted password is equal to 'swordfish'. If it is, then this.state.authorized will become true.

    You need authorize to get called whenever a user hits "Submit!"

Give the <form></form> an onSubmit attribute. Set the attribute's value equal to the authorize function.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Contact = React.createClass({
    getInitialState: function () {
        return {
            password: 'swordfish',
            authorized: false
        };
    },

    authorize: function (e) {
        var password = e.target.querySelector(
            'input[type="password"]').value;
        var auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    },

    render: function () {
        var login = (
            <form action="#" onSubmit={this.authorize}>
                <input type="password" placeholder="password" />
                <input type="submit" />
            </form>
        );
        var contactInfo = (
            <ul>
                <li>
                    client@example.com
                </li>
                <li>
                    555.555.5555
                </li>
            </ul>
        );

        return (
            <div id="authorization">
                <h1>{ this.state.authorized ? "Contact" : "Enter the Password" }</h1>
                {this.state.authorized ? contactInfo : login}


            </div>
        );
    }
});

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);
