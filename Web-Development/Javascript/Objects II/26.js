/*Passing Arguments
The askTeller function has been modified within the Person class to directly give you your balance. However, it now needs the account password in order to return the bankBalance.

Instructions
Create a new variable called myBalance that calls the askTeller function with a password argument, 1234.

*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);