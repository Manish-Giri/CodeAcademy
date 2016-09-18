var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="./selfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage/>, document.getElementById('app'));

/*
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can't see each other.

This is a problem!

On line 9, you just added an instance of the NavBar component class. But since you're in ProfilePage.js, JavaScript has no idea what NavBar means.

If you want to use a variable that's declared in a different file, such as NavBar, then you have to import the file that you want. To import a file, you can use require and pass in a filepath:

var NavBar = require('./NavBar.js');
We've used require before, but not like this.

If you pass require a string that begins with either a dot or a slash, then require will treat that string as a filepath. require will follow that filepath, and import the file that it finds.

If your filepath doesn't have a file extension, then ".js" is assumed. So the above example could be shortened:

var NavBar = require('./NavBar');
One final, important note:
None of this behavior is specific to React! Module systems of independent, importable files are a very popular way to organize code. React's specific module system comes from Node.js. More on all of that later.
1.
The <NavBar /> on line 9 isn't going to work until you import NavBar.js.

In ProfilePage.js, on line 3, use require to import NavBar.js. Save the result in a variable named NavBar.

ProfilePage.js and NavBar.js are located in the same parent directory.
*/
