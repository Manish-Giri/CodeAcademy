<!-- Objects in Real Life
How object-oriented programming is used in real life can be shown with a forum as an example:

Every forum user (object) has the same rights: he can log in and write (methods), can contain some settings (properties), but every user has a different name (another property).

Every user is created easily, as you create a new instance of a User class when you sign up. And as we've seen, there are some properties and methods that every instance has in common (such as logging in and writing), and there are some which are unique (such as each user's name).

And without object-oriented programming—OOP for short—this could not be done that easily. ;-)

Another example: on the right, there is a Person class, so every new Person has some properties, like $isAlive or $firstname, and a method greet().

Right now there is only one instance of the Person class: $me. But we'll reconstruct this class and you'll even create another instance of the class, so your name will be echod, too.

In the next exercises we are going to create some classes, so let's start coding. :-)

Instructions
Everything crystal clear? Good, press Save & Submit Code. -->

<!DOCTYPE html>
<html>
    <head>
      <title> Introduction to Object-Oriented Programming </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
    </head>
    <body>
      <p>
      <?php
        // The code below creates the class
        class Person {
            // Creating some properties (variables tied to an object)
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
            
            // Assigning the values
            public function __construct($firstname, $lastname, $age) {
              $this->firstname = $firstname;
              $this->lastname = $lastname;
              $this->age = $age;
            }
            
            // Creating a method (function tied to an object)
            public function greet() {
              return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)";
            }
          }
          
        // Creating a new person called "boring 12345", who is 12345 years old ;-)
        $me = new Person('boring', '12345', 12345);
        
        // Printing out, what the greet method returns
        echo $me->greet(); 
        ?>
        </p>
    </body>
</html>