/*DRY Penguins
Creating a brand new Penguin was nice, but we did end up reusing a lot of the same code as the Animal class. This goes against the "DRY" principle of programming: Don't Repeat Yourself.

Inheritance can help us here! A Penguin is an Animal, so they should have all the same properties and methods as Animal. Whenever this X is-a Y relationship exists, there's a good chance that we should be using inheritance.

Remember, inheritance lets us see and use properties and methods from another class. To say that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.

Instructions
Create a new Penguin class. The Penguin constructor can be more unique than the generic Animal one because all penguins have 2 legs. Your constructor should only take a name parameter, and within the constructor itself, set this.numLegs to 2.

Set the Penguin class's prototype to a new instance of Animal by adding this line after you make the constructor:

Penguin.prototype = new Animal();

This means that Penguin inherits properties and methods from Animal.*/

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.numLegs = 2;
    this.name = name;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
