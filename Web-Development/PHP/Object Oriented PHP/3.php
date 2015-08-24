<!-- Inheritance
As you've been thinking about classes and objects, you might have realized that one class might actually be a specialized type of another class. For instance, you might have a Vehicle class and a Truck class, and it would probably save you an awful lot of typing if you could somehow specify that Truck instances should automatically have many of the same properties and methods as Vehicle instances.

PHP allows us to accomplish this through a process called inheritance. Inheritance is a way for one class to take on the properties or methods of another class. You could say that the one class extends the other. This is used to express an "is-a" relationship—for example, a Truck "is-a" Vehicle, so it could inherit from Vehicle, but a Motorcycle isn't a Truck, so it shouldn't inherit from Truck (though both could inherit from Vehicle).

We can cause one PHP class to inherit from another with the extends keyword.

Instructions
Check out the code in the editor to the right. We've created two classes, Shape and Square, with Square inheriting from Shape.

We didn't specify that Square has a $hasSides property, but it should inherit it from Shape.

Complete the if statement on line 18 by using the property_exists() method to check if $square has the "hasSides" property. Check the Hint for help! -->

<html>
  <head>
    <title>The Shape of Things to Come</title>
  </head>
  <body>
    <p>
      <?php
        class Shape {
          public $hasSides = true;
        }
        
        class Square extends Shape {
        
        }
        
        $square = new Square();
        // Add your code below!
        if (property_exists($square, "hasSides") ) {
          echo "I have sides!";
        }
      ?>
    </p>
  </body>
</html>