<!-- The Static Keyword
Nice work!

You probably noticed that we could access the Ninja class constant without actually creating an instance of Ninja, and if you're particularly precocious, you might be wondering whether it's possible to access class properties or methods without creating an instance of the class. The answer: yes!

The static keyword lets you use a class' property or method without having to create an instance of that class. It works like this:

class Person {
  public static $isAlive = "Yep!"
  public static function greet() {
    echo "Hello there!";
  }
}

echo Person::$isAlive;
// prints "Yep!"
Person::greet();
// prints "Hello there!"
When combined with the scope resolution operator, this lets us access class information without having to instantiate anything. Neat, right?

Instructions
We've created a King class with a proclaim() method in the editor to the right. Go ahead and call the proclaim() method using the static keyword—no instances necessary! -->
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        class King {
          // Modify the code on line 10...
          public static function proclaim() {
            echo "A kingly proclamation!";
          }
        }
        // ...and call the method below!
        King::proclaim();
      ?>
    </p>
  </body>
</html>