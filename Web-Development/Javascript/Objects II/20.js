/*Penguins, Properties, and the Prototype
We saw in the last exercise how Penguin inherited the sayName method from Animal. We now explore how classes can inherit properties as well.

For simplicity, we've defined a new Penguin class that doesn't inherit anything from Animal.

Instructions
Create an Emperor class that takes a single name parameter and sets its name property to be this value. Don't set a numLegs property in the constructor.

Similar to what we did in the previous exercise, make Emperor inherit from Penguin by setting the prototype of Emperor to be Penguin.

Create a new emperor object that is an instance of the Emperor class with any name you'd like. Then use console.log to print the number of legs emperor has—this should have been inherited from Penguin!*/

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emp = new Emperor("john");
console.log(emp.numLegs);