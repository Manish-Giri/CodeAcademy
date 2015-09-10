/*Listing Everybody
Address book programs usually have a screen that lists all of the contacts. Let's build that feature.

We could write out separate lines of code to display all of the people like in the last exercise, but that's tedious. Instead, we can use a for loop to do this automatically.

Instructions
We'll be creating a function that lists all of the users.

Create a function called list that does not take any parameters.
At the start of the function, define a variable to store the number of items in the contacts array. Call it contactsLength.
All of the items in an array are numbered, starting at 0. To cycle through all of the elements of the array, create a for loop that cycles from 0 up to one less than the number of items in the contacts array.
Inside of the loop, add code to call printPerson, passing in the element of the array that the loop is currently at.
At the very bottom of the file, call the list function. The list function should then loop through every member of the contacts array and print its information.*/

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function() {
    var contactsLength = contacts.length;
    for(var i = 0 ; i < contactsLength; i++) {
        console.log(printPerson(contacts[i]));
    }
}

list();