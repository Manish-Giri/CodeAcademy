/*Looks For-In To Me
Objects aren't so foreign if you really think about it!

Remember you can figure out the type of a variable by using typeof myVariable;. Types we are concerned with for now are "object", "string", and "number".

Recall the for-in loop:

for(var x in obj) {
executeSomething();
}
This will go through all the properties of obj one by one and assign the property name to x on each run of the loop.

Let's combine our knowledge of these two concepts.

Instructions
Examine the languages object. Three properties are strings, whereas one is a number.

Use a for-in loop to print out the three ways to say hello. In the loop, you should check to see if the property value is a string so you don't accidentally print a number.*/

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var lang in languages) {
    if(typeof(languages[lang]) === "string") {
        console.log(languages[lang]);
    }
}
