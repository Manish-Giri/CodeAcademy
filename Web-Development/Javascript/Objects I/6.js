/*We Made a Friend!
We have our address book in the contacts array, but what if we make a new friend and want to add them as well?

Objects, just like other types of data, can be put into arrays with a array[position] = object statement. To append something to the end of the array, you need to put it in the position one after the last item.

Since arrays are numbered starting at zero, the number of the last item in the array will be one less than the quantity of items in the array. The size of the array is thus the position to insert at.

The length of an array, like the length of a string, can be found with array.length.

We can do the insert in a succinct way by adding the new object directly into the array position without even giving it a name. This can be confusing, but we will be able to refer to it by its array position, so it does not need a direct name. Do it like this:

contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
(Assuming you defined the add function with the parameters firstName, lastName, phoneNumber, and email.)

That will automatically create a new object and add it into the array. Pretty neat.

Instructions
We'll be creating a function that allows us to add our new friend to the address book.

Create a function called add with the parameters firstName, lastName, and email, phoneNumber.
In this new function, you want to create a new contact object like bob and mary. Instead of having this object's property values be filled with strings though, set them to the appropriate function parameters passed in.
Add this new contact object to the contacts array.
Call add with whatever first name, last name, phone number, and email arguments you like.
Make sure you call the list function, to check if your new entry is added. And delete any other function that logs output in the console, i.e 'search' function.
Run the code!*/

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

//search("Jones");


var add = function(firstName, lastName, email, phoneNumber) {
    var newPerson = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    }
    
    contacts[contacts.length] = newPerson;
}

add("Manish", "Giri", "xyz", 5136559173);

list();