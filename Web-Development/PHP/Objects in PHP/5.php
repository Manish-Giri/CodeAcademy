<!-- Property Panic (2)
Good job, now we have some properties.
But right now $teacher and $student are the same, which should be changed immediately, correct? :-)

The solution: we have to create a constructor to create different objects. This constructor is also a method, but you don't need to worry about this fact just yet.

The syntax:

public function __construct($prop1, $prop2) {
  $this->prop1 = $prop1;
  $this->prop2 = $prop2;
}
So you should remember the public keyword and the arrow notation.

Some new things:

You're creating a function bound to a class (a method).
The constructor method has to be called __construct().
Finally, the weird way to assign the values: $this->prop1 = $prop1 means that the value you pass in the __construct() function via the new keyword is assigned to $this, which represents the object you are dealing with, and ->prop1 is the actual property of the object.
By creating a new instance using the new keyword, you actually call this __construct() method, which constructs the object. And that's why we have to pass in some arguments when we create an instance of a class, since this is how the properties get set!

Instructions
Add a constructor to Person with three parameters, $firstname, $lastname and $age.
In your constructor, use the three parameters to set the public properties $firstname, $lastname and $age.
Change your $teacher instantiation to store new Person("boring", "12345", 12345).
Add your $firstname, $lastname and $age to $student in the same manner.
echo the $age of $student. -->

<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <!-- Your code here -->
        <?php
        class Person {
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
            
            public function __construct($firstname, $lastname, $age) {
                $this->firstname = $firstname;
                $this->lastname = $lastname;
                $this->age = $age;
            }
        }
        
        $teacher = new Person("boring", "12345", 12345);
        echo "$teacher->isAlive";
        $student = new Person("manish", "giri", 26);
        echo "$student->age";
        
        ?>
      </p>
    </body>
</html>