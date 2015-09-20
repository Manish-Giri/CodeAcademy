/*So Meta I Can't Take It!
Do you remember how we said every JavaScript object has some baggage associated with it? Part of this baggage was the hasOwnProperty method available to all objects. Now let's see where this came from...

If we have just a plain object (i.e., not created from a class constructor), recall that it automatically inherits from Object.prototype. Could this be where we get hasOwnProperty from? How can we check?

Instructions
Let's first see what type Object.prototype is. Do this in line 2 and save it into prototypeType.

If all goes well, you should realize that Object.prototype itself is an object! And since all objects have the hasOwnProperty method, it's pretty easy to check if hasOwnProperty comes from Object.prototype. Do this in line 6 and the result may be surprising.*/

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");

console.log(hasOwn);