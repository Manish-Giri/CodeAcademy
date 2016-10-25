// f the user isn't authorized, then you want them to see a login form into which they can enter a password. Let's make that login form!
//
// In the render function, before the return statement, declare a new variable named login.
//
// Set login equal to a JSX <form></form> element. This <form></form> is going to have multiple children, so wrap it in parentheses!
//
// Give the <form></form> an attribute of action="#".
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

      </form>
      )
    return (
      <div id="authorization">
        <h1>{ this.state.authorized ? "Contact" : "Enter the Password" }</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);
