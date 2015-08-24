<!-- Challenge Time
Awesome! Now let's try the same without the training wheels. :-P

Let's create a Cat class, which has two public properties: an $isAlive property storing the value true and a $numLegs property containing the value 4.

There should be a public $name property, which should get a value when a new object is created, so assign the value to $name via the __construct() method.

Then I also want these Cats to be able to meow, so add a meow() method, which returns "Meow meow".

Finally, create an instance of the Cat class, which has the $name "CodeCat" and store it in the variable $cat1. Then call the meow() method on this cat.

Sounds doable? Then let's start the challenge. :-)

Instructions
Create a class called Cat.
Add two public properties to this class: $isAlive ought to store the value true and $numLegsshould contain the value 4.
Add a public $name property, which gets its value via the __construct()or.
Add a public method called meow(), which returns "Meow meow".
Create an instance of the Cat class, which has the $name "CodeCat".
Call the meow() method on this Cat and echo the result. -->

<!DOCTYPE html>
<html>
    <head>
	  <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php
          // Your code here
          class Cat {
              public $isAlive = true;
              public $numLegs = 4;
              public $name;
              
              public function __construct($name) {
                  $this->name = $name;
              }
              
              public function meow() {
                  return "Meow meow";
              }
          }
          
          $catobj = new Cat("CodeCat");
          echo "catobj->meow()";
        ?>
      </p>
    </body>
</html>