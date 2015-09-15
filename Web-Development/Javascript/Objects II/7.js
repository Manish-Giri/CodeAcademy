/*Know Thyself
In the last exercise, we used typeof to figure out what type a variable in JavaScript is. Since we know how to tell objects apart from everything else now, let's focus on them.

You wouldn't know it, but every object in JavaScript comes with some baggage (stay tuned for more on this!). Part of this baggage includes a method called hasOwnProperty. This lets us know if an object has a particular property.

We show how to use hasOwnProperty in the last two lines. It returns true or false, based on whether an object has a certain property.

Instructions
You should finish myObj by giving it a name property. Make sure that myObj does not have a nickname property so that the last line will print false.*/

var myObj = {
    // finish myObj
    name: "Manish"
    
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false