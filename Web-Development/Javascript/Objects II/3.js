/*
Literally Speaking
In the last exercise, we added methods to objects via constructor notation. We can also add methods to objects in literal notation:

var someObj = {

aProperty: value,
someMethod: function(some, params) { }

};
When we call someObj.someMethod(some, values);, the code between the curly brackets { } will run.

Note here we see a method that takes parameters. Methods defined in both constructors and literal notation can take parameters, just like normal functions.

Instructions
Take a look at the partially-defined james object. Complete the speak method such that the last two lines in the editor will cause "Hello, I am feeling great" and "Hello, I am feeling just okay" to be printed to the console.*/

var james = {
    job: "programmer",
    married: false,
    speak: function(message) {
        
        if(message === "great") {
            console.log("Hello, I am feeling great");
        }
        
        else if(message === "just okay") {
            console.log("Hello, I am feeling just okay");
        }
        
    }
};

james.speak("great");
james.speak("just okay");