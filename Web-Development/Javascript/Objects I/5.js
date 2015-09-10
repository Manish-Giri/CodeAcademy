/*Finding that Special Someone
Let's say we're looking for someone in our address book with a specific last name.

We can do this with a technique for searching arrays called "linear search". With it, we use a loop to check through all of the items in the array one-by-one until we see the item that we want.

We can apply linear search to print out all of the people that have a particular last name.

Instructions
We'll be creating a function that can search for people with a specific last name and print those people out with the printPerson function.

Create a function called search that takes a parameter called lastName. Leave the list function alone.
Like with the last exercise, define a variable and store the number of items in the array in it. (Since every function has its own context, or scope, you can call this variable contactsLength, too, if you like!)
Create a for loop that runs through all of the items in the array. For this step, the code for search is identical to that of list.
The twist comes here: in the body of the loop, rather than printing out every single item in the array, add an if statement that checks to see if the lastName property of the object is equal to the lastName argument. Have the function run printPerson on the person if and only if the lastName property of the person matches the lastName argument.
At the bottom of the file, call the search function, passing in "Jones" as the last name to search for.*/

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

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
		if(contacts[i].lastName === lastName) {
		    printPerson(contacts[i]);
		}
	}
}

search("Jones");