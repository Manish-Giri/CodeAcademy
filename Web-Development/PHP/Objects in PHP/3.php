<!-- Building Your First Class
Great, now you know the technical terms. :-)
Let's start coding by reconstructing the Person class.

The basic class syntax looks like the following:

class Classname {

}
The class keyword means that you create a new class; the syntax is quite similar to the function syntax.

And you can create new instances of this class using the following syntax:

$obj1 = new Classname();
The new keyword means that you create a new object and ensures that your arguments are added as properties, so it initializes the constructor (which we are going to deal with later).

We don't need to pass in any arguments, as we haven't added any properties (which can store different values depending on the instance) quite yet.

Instructions
Add a pair of<?php ?> tags in line 9.
Create a Person class.
Create two instances of the Person class: $teacher and $student. -->

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
            
        }
        
        $teacher = new Person();
        $student = new Person();
        
        ?>
      </p>
    </body>
</html>