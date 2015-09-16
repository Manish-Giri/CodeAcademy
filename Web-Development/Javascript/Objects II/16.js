/*It's All in the Genes
In object-oriented programming, inheritance allows one class to see and use the methods and properties of another class. You can think of it as a child being able to use his or her parent's money because the child inherits the money.

We will learn more about inheritance as we continue this lesson, but for now let's just refresh our memories about how classes and objects work.

Instructions
Create a class named Animal with two properties, name and numLegs. The Animal constructor should have two arguments whose values are assigned to name and numLegs.

Next, change the prototype of Animal and add a method sayName that prints to the console "Hi my name is [name]", where [name] is the value of name.

Click "Stuck? Get a hint!" for examples of how to create a class and how to add a method to an object's prototype.

Finally, we have provided the last two lines to test your constructor and sayName method. Don't change these!*/

// create your Animal class here
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}


// create the sayName method for Animal
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}




// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();