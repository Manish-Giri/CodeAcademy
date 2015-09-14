/*Fun with Functions
Recall that we can add methods (i.e., functions associated with objects) to a constructor:

function someObject() {

  this.someMethod = function() {
  };

}
Suppose we said var someObj = new someObject();. When we call someObj.someMethod(), the code between the curly brackets { } above will run.

Instructions
Add a speak method to the Person constructor. Whenever speak is called, it should print "Hello!" to the console.
*/

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log("Hello!");
    }
    
}

var user = new Person("Codecademy Student",false);
user.speak();