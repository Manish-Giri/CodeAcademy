var React = require('react');
var ReactDOM = require('react-dom');


var owl = {
  title: "Excellent Owl",
  src: "./owl.jpg"
};
// Component class starts here:
var Owl = React.createClass({
    render: function() {
      return (<div>
        	<h1>{owl.title}</h1>
         <img src={owl.src} alt={owl.title}/>
        </div>);
    }
  }
);

ReactDOM.render(<Owl />, document.getElementById('app'));
