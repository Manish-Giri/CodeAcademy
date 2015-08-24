<!-- 
Putting It All Together, Part I
Well done! You've reconstructed the Person class.

Let's create another class: a Dog class. It should have a public property $numLegs, which stores the value 4. Furthermore, there should be the possibility to give every dog a $name using a __constructor.

Of course we also need some methods, as a dog is able to bark(). Our dogs are also able to introduce themselves, to greet(), so we'll also need a method for this.

At last we'll need two cute dogs. :-)

That's it. Let's start!

Note: You'll find the basic syntax for the tasks in the hints, so don't worry. :-)
And although this looks like a huge task, it's actually quite easy. :-)

So this time let's create our class and add the properties.

Instructions
Add the <?php ?> tag.
Create a Dog class.
Add a public property called $numLegs, which stores the value 4 to the Dog class.
Add another public property called $name, which doesn't contain a value.
Add the __construct()or method, which accepts $name as a parameter.
In this __construct()or method, add some code, so $this->name contains $name. -->

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
        }
        
        ?>
      </p>
    </body>
</html>