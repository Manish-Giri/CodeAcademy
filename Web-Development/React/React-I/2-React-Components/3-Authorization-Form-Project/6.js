// Good! Now let's give your form some <input />s for the user to fill out.
//
// In between the <form></form> tags, write two <input /> tags. Give the first <input /> two attributes: type="password" and placeholder="Password". Give the second <input /> one attribute: type="submit".
// Stuck? Get a hint
// 6.
// Now let's hide the contact info.
//
// After your login variable, declare another variable named contactInfo. Set it equal to empty parentheses:
//
// var contactInfo = (
//
// );
// return (
// Cut the <ul></ul> out of the return statement, and paste it in between those parentheses!

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

            </div>
        );
    }
});

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);