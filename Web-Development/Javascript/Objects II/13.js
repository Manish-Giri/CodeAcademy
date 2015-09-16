/*
How do Classes Help Us?
Classes are very important in object-oriented programming. This is because a class tells us helpful information about objects, and you can think of an object as a particular instance of a class.

For example, look at our Person class again in the console. We know that any Person will have a name and age, because they are in the constructor. This allows us to create a function like printPersonName, which will take a Person as an argument and print out their name. We know the function will work on any Person, because name is a valid property for that class.

Instructions
Make a Person called me with your own name and age, and print your name using printPersonName.*/

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Manish Giri", 26);
printPerson(me);