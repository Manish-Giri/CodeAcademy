/*Open to the Public
In JavaScript all properties of an object are automatically public. Public means that they can be accessed outside the class. Think of these properties as the information a class is willing to share.

Look at the Person class. It has 3 public properties: firstName, lastName, and age. On lines 8 and 9, we access the firstName and lastName properties of john and assign them to myFirst and myLast.

Notice that we are free to access the firstName and lastName properties, which is what we mean when we say they are public.

Instructions
Declare a third variable called myAge and use it to store the age property of the john object.*/

function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.
var myAge = john.age;