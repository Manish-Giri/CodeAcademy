/*Getting IN-timate
Now let's learn how to work with all the properties that belong to an object. First, let's define an object:

var dog = {
species: "bulldog",
age: 3,
color: brown
};
To print out all elements, we can use a for/in loop, like this:

for(var property in dog) {
  console.log(property);
}
In the loop we use console.log to print out each key. Remember the "property" bit can be any placeholder name you like.

Instructions
Use a for-in loop to print out all the properties of nyc.*/

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var prop in nyc) {
    console.log(prop);
}

/*List ALL the Properties!
We've just seen how to print all of an object's property names with a for-in loop. But how do we print out all the values associated with every property? Surprise! The for-in loop will be our friend again! Let's get there slowly. Our dog object can help us.

var dog = {
species: "bulldog",
age: 3,
color: brown
};
First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";

We see that by assigning the property name to a variable, we can then use the variable name in bracket notation to get the property's value. So to get all the values from the dog object, we would use the for-in loop and the bracket notation we just saw above. See the hint to see the code to print the property values for dog.

Instructions
Write another for-in loop, but this time print the value of each property in nyc.*/

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var prop in nyc) {
    console.log(nyc[prop]);
}