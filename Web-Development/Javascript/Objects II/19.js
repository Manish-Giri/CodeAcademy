/*Black (and White) Penguin Magic
Now for some black magic and to see the power of inheritance!

We never defined a sayName method for Penguin, but what happens when we try to call it?

Instructions
Create a Penguin object with the variable name penguin and any name you'd like.

Then call penguin.sayName();.

Then be amazed.*/

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

var penguin = new Penguin("Baha");
penguin.sayName();