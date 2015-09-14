/*Who's in Your Bracket?
And finally, let's go over retrieving property values. Throughout this section, we've been using dot notation to get the value of an object's property:

someObj.propName;
However, remember that we can also use bracket notation:

someObj["propName"];
An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names:

var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];
The last line is exactly the same as using someObj["propName"];.

Instructions
Take advantage of the ability to use variables with bracket notation.

In line 7, set aProperty to a string of the first property in james (ie. the job property).

Then print james's job using bracket notation and aProperty.*/

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);
