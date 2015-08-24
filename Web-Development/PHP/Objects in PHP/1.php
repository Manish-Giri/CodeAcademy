<!-- What's Object-Oriented Programming?
PHP is an object-oriented programming language, which means that you can create objects, which can contain variables and functions.

When talking about objects, you refer to variables belonging to these objects as properties (or attributes or fields), and functions are called methods.

These objects are essential when dealing with PHP, as almost everything is an object: for example, functions or arrays are objects, too!
And this shows why we use objects: we can bundle our functions and data in one place, we can create objects easily using classes (object constructors), so we can create lots of instances (objects, which have been constructed via a class), which contain mostly the same data, except some little nuances.

On the right, there is a Person class and one instance stored in $me on line 32. Then the greet() method of the $me object is called and the result is echod on line 35.

Then the stylesheet adds some color to the result. :-)

Instructions
Try to understand the code on the right. (Don't worry if some of it is tricky—we'll go over it!) Then press Save & Submit Code. -->

<!DOCTYPE html>
<html>
    <head>
      <title> Introduction to Object-Oriented Programming </title>
      <style type="text/css">
      p {
    color: #009900;
    font-size: 20px;
}
      </style>
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