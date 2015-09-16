/*Prototype to the Rescue
Here we have very similar code as last time, but there is an important difference. Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even though we haven't added a bark method to that object. How is this so? Because we have now changed the prototype for the class Dog. This immediately teaches all Dogs the new method.

In general, if you want to add a method to a class such that all members of the class can use it, we use the following syntax to extend the prototype:

className.prototype.newMethod =

function() {
statements;
};
Instructions
Click Save & Submit Code to move onto the next exercise, for practice manipulating prototypes.*/

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();