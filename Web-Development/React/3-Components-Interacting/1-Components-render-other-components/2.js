/**
 * Created by manishgiri on 9/18/16.
 */
/*Here is a render function that returns an HTML-like JSX element:

    var Example = React.createClass({
        render: function () {
            return <h1>Hello world</h1>;
        }
    });
You've seen render functions return <div></div>s, <p></p>s, and <h1></h1>s, just like in the above example.

Render functions can also return another kind of JSX: component instances.*/

    var OMG = React.createClass({
    render: function () {
        return <h1>Whooaa!</h1>;
    }
});

var Crazy = React.createClass({
    render: function () {
        return <OMG />;
    }
});

//In the above example, Crazy's render function returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

