/*Class is in Session
Alright, it's time to learn the basics of object-oriented programming! Often abbreviated OOP, this is a very important programming paradigm that is widely used in the industry today.

Let's start by introducing classes. We learned in the last course that constructors are a way to make objects, but they actually do even more than that.

When you make a constructor, you are in fact defining a new class. A class can be thought of as a type, or a category of objects—kind of like how Number and String are types in JavaScript.

Take a look at our Person example taken from Introduction to Objects I. In this case bob and susan are two separate objects, but both belong to the class Person.

Instructions
Make your own class, Circle, by building a constructor for it. The constructor for Circle should have one property, radius, and take one argument for the initial radius.*/

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(value) {
    this.radius = value;
}