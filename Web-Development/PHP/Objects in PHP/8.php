<!-- Putting It All Together, Part II
Good job, we're almost there. :-)

Now let's add two further methods and let's create some objects.

Instructions
Add a public method to the Dog class called bark(), which returns "Woof!".
Add a public method called greet() to the Dog class. This method ought to return a nice sentence containing the $name property of the Dog, which introduces himself.
Create two instances of the Dog class and store the one with the $name "Barker" in the variable $dog1 and the other one with the $name "Amigo" in the variable $dog2.
As you might have expected, call the bark() method on $dog1 and echo the result.
The last one: Call the greet() method on $dog2 and echo the result. -->

<!DOCTYPE html>
<html>
	<head>
	  <title> Practice makes perfect! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
      <?php
        <!-- Your code here -->
        class Dog {
            public $numLegs = 4;
            public $name;
            
            public function __construct($name) {
                $this->name = $name;
            }
            
            public function bark() {
                return "Woof!";
            }
            
            public function greet() {
                return "Hi, "." My name is ".$this->name."!";
            }
        }
        
        $dog1 = new Dog("Barker");
        $dog2 = new Dog("Amigo");
        
        echo "$dog2->greet()";
        ?>
      </p>
    </body>
</html>