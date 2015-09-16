/*Teach Snoopy
So we know that a class will have certain properties and methods, but what keeps track of what a given class can or can't do? What a class has or doesn't have? That is the job of the prototype.

JavaScript automatically defines the prototype for class with a constructor. For example, our Dog constructor ensures that the Dog prototype has a breed property. Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.

We know we can add methods to objects, and in line 7 we add the bark method to buddy. Hit run and you will see one "Woof" printed when buddy barks. Notice what happens when we try to get snoopy to bark in line 17 though. Even though snoopy is of the class Dog, he doesn't know how to bark because only buddy had bark added as a method.

Instructions
To fix this, start at line 15 add a bark method for the snoopy object. You can make it just like the bark method for buddy, or type in whatever barking noise you want instead of "Woof".*/

function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function(){
    console.log("Ruff!");
}
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();