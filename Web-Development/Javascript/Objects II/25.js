/*Private Methods
Why did that code work? An object's private variables can only be accessed by other methods that are part of that same object. So, we just used an object's public method to access a private variable!

Methods can also be private within a class and inaccessible outside of the class. Changing this.returnBalance from the last exercise to var returnBalance makes this method private. If you run the program trying to access the method you get an undefined error this time.

The way to access a private method is similar to accessing a private variable. You must create a public method for the class that returns the private method.

Instructions
Create a method called askTeller within the Person class that returns the returnBalance method. This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.

Because askTeller returns a method, we need to call it to make it any use. This is what var myBalance = myBalanceMethod(); does.*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);