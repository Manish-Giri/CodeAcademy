// The browser should stay 'Enter the Password.'
//
// To make sure it's working properly, edit the getInitialState function so that the user is authorized:
//
// getInitialState: function () {
//   return {
//     password: 'swordfish',
//     authorized: true
//   };
// },
// This should change the text back to 'Contact'.
//
// If it works, then make sure to change authorized back to false!

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
