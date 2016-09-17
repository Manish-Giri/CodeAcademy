var React = require('react');
var ReactDOM = require('react-dom');


var friends = [
  {
    title: "Yummmmmmm",
    src: "./friends/1.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "./friends/2.jpg"
  },
  {
    title: "Yikes",
    src: "./friends/3.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass(
		{
			render: function () {
			var friend = friends[1];
  return (
    <div>
      <h1>{friend.title}</h1>
      <img src={friend.src} />
    </div>
  );
}
}
);

ReactDOM.render(<Friend />, document.getElementById('app'));
