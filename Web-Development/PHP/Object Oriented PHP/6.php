<!-- Class Constants and Scope Resolution
We've talked a lot about changing variables in PHP, but sometimes we want variables that don't change. These are prefixed with the const keyword (short for constant).

PHP lets us set constants on a class-by-class basis! Each class has its own scope, which is the context in which its variables can be used.

class Immortal extends Person {
  // Immortals never die!
  const alive = true;
}

// If true...
if (Immortal::alive) {
  echo "I live forever!";
}
// echoes "I live forever!"
In the example above, we use :: to access the alive constant inside the Immortal class.

Note that constants do not start with $.

Instructions
We've created the Ninja class for you in the editor.

Set a stealth constant to the string "MAXIMUM".
Then echo it to the page using Ninja::stealth.
That :: is the scope resolution operator. -->
<html>
  <head>
    <title>Scope it Out!</title>
  </head>
  <body>
    <p>
      <?php
      class Person {
          
      }
      class Ninja extends Person {
        // Add your code here...
        const stealth = "MAXIMUM";
      }
      // ...and here!
      echo Ninja::stealth;
      
      ?>
    </p>
  </body>
</html>