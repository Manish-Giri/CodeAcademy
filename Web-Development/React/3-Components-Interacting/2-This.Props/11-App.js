// Select App.js.

// Notice that App renders two <List><List /> instances, and that each <List><List /> has at least one <li></li> child.

// Now open List.js, and take a look at the List component class.

// Think about the fact that each List instance is going to be rendered with two JSX tags:

// <List>  // opening tag
// </List> // closing tag
// ...and that there will be at least one <li></li> child in between those tags:

// <List>  // opening tag
//   <li></li> // child
// </List> // closing tag
// Click Run.
// 2.
// You can see two list titles in the browser, but no list items! How can you make the list-items appear?

// In List.js, in the render function, in between <ul></ul> tags, add {this.props.children}.
// 3.
// BONUS: Each <List><List /> instance is passed a singular title: "Living Musician" and "Living Cat Musician," respectively. Somehow, each <List><List /> counts its list-items and automatically adds an "s" to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.

// See if you can figure out how the instances of the List component class are automatically pluralizing their titles.

var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

