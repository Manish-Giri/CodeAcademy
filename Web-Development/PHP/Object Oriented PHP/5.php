<!-- The Final Word
When you were a kid, one of your parents might have told you: "You're not doing that, and that's final!"

In PHP, a parent class can prevent its methods from being overridden by its children with—you guessed it—the final keyword.

You'd want to use the final keyword in your code to control what methods can be modified by a class' subclasses. For instance, you might want all Vehicles to have the same drive() method no matter what, so you would prefix its method definition with final, like so:

class Vehicle {
  final public function drive() {
    return "I'm drivin' here!";
  }
}
Instructions
Update your code from the last exercise to use the final keyword for the honk() function inside Vehicle. Note how now instead of getting "Beep beep!", we get an error. No overriding here! -->
<html>
  <head>
    <title>Override!</title>
  </head>
  <body>
    <p>
      <?php
        class Vehicle {
          final public function honk() {
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