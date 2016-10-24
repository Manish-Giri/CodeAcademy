// Now you're ready for <ProfilePage /> to render <NavBar />!
//
// All that's left to do is render <ProfilePage />.
// 1.
// At the bottom of ProfilePage.js, use ReactDOM.render to render an instance of ProfilePage.
//
// For ReactDOM.render's second argument, pass in document.getElementById('app').
//
// Once the result has rendered in the browser, look at the render functions of both ProfilePage and NavBar. Try to figure out exactly which parts of the browser's display come from which component class.
// 2.
// Congratulations! It may not seem like a big deal yet, but you've just discovered the key to React's power.
//
// By nesting components inside of other components, you can build infinitely complex architectures, even if each component is relatively simple. The relationship that you just built is the fundamental relationship behind React.js.

var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

module.exports = NavBar;
