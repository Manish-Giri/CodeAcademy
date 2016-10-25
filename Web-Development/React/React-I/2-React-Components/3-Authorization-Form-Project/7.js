/**
 * Created by manishgiri on 9/17/16.
 */
/*
Great! By saving two JSX expressions as variables, you've set yourself up nicely to toggle between them.

In the render function's return statement, make a new line right below the <h1></h1>. On this new line, use a ternary operator. If this.state.authorized is true, make the ternary return contactInfo. Otherwise, make the ternary return login.*/

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
        var login = (<form action="#">
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