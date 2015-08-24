<!-- A Method to the Madness
Great work, now the hardest and longest part is behind us. :-)

As you've seen, methods—functions bundled into objects—have the following syntax:

public function funcname($optionalParameter) {
  // Do something
}
And now we know the __construct function is a special one, which is called when a new object is created using a new keyword.
Furthermore, we've learnt we have to use the $this keyword, if we want to access some properties in a class.

So if we want a method to return a sentence containing the firstname, we would have to use $this->firstname. (As you see, there is no $ when you access a property in a class.)

Calling a method is similar to accessing a property, you just have to add the parentheses:

$obj1 -> meth1();
Instructions
Add a method called greet() to your class. This method ought to return "Hello, my name is " . $this->firstname . " " . $this->lastname . ". Nice to meet you! :-)" .
Call this new greet() method on $teacher and $student and echo the result to the page. -->

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
            
            public function greet() {
                return "Hello, my name is ".$this->firstname." ".$this->lastname .".Nice to meet you~ :-)"; 
            }
        }
        
        $teacher = new Person("boring", "12345", 12345);
        echo "$teacher->isAlive";
        $student = new Person("manish", "giri", 26);
        echo "$student->age";
        
        echo "$teacher->greet()";
        echo "$student->greet()";
        
        ?>
      </p>
    </body>
</html>