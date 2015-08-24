<!-- Overriding Parent Methods
Nice work!

Sometimes we want a child class (or subclass) to be able to override a property or method of its parent class (or superclass).

For instance, we might have a Shape class with a $sides property set to true, but we might want Square to override this property and set $sides to 4 (since a square always has four sides). That would look something like this:

class Shape {
  $sides = true;
}

class Square extends Shape {
  $sides = 4;
}
It's pretty easy—you just create a new property or method in the child class with the same name as the one in the parent class, and the child's version will always take precedence over the inherited version.

Instructions
We've created a Vehicle class in the editor.

Create a child class, Bicycle, that overrides the Vehicle class' public function honk() and replaces it with a function that returns "Beep beep!".
Create a $bicycle instance of the Bicycle class and echo the result of calling its honk() method. Check the Hint for refreshers if you need them! -->

<html>
  <head>
    <title>Override!</title>
  </head>
  <body>
    <p>
      <?php
        class Vehicle {
          public function honk() {
            return "HONK HONK!";
          }
        }
        // Add your code below!
        class Bicycle extends Vehicle {
            public function honk() {
                return "Beep beep!";
            }
        }
        
        $bicycle = new Bicycle();
        echo $bicycle->honk();
        
      ?>
    </p>
  </body>
</html>