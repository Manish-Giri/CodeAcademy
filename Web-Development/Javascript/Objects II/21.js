/*Up the Food-I-mean-Prototype Chain
A penguin is an animal and an emperor penguin is a penguin. Are emperor penguins animals too? Of course!

The "prototype chain" in JavaScript knows this as well. If JavaScript encounters something it can't find in the current class's methods or properties, it looks up the prototype chain to see if it's defined in a class that it inherits from. This keeps going upwards until it stops all the way at the top: the mighty Object.prototype (more on this later). By default, all classes inherit directly from Object, unless we change the class's prototype, like we've been doing for Penguin and Emperor.

Instructions
Let's see how going up the prototype chain works! We've defined some classes and inheritance patterns: Emperor inherits from Penguin which inherits from Animal. We've also created an instance of the Emperor class.

Without modifying anything other than lines 22-24, complete the console.log statements to print the appropriate responses.

Remember how the prototype chain works: if a property is not defined for a class, this class's prototype chain will be traversed upwards until one is found (or not) in a parent (higher) class.*/
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying  ); // should print "Waddle waddle"
console.log(myEmperor.numLegs ); // should print 2
console.log(myEmperor.isAlive  ); // should print true