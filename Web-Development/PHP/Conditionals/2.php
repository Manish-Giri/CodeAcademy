<!-- If statements
Nice work on comparisons! Now let's see how we can use comparisons to ask yes or no questions.

Say we want to write a program that asks whether your name is longer than 7 letters. If the answer is yes, we can respond with "You have a long name!" We can do this with an if statement:

<?php
  $age = 17;

  if( $age > 16 ) {
    echo "You can drive!";
  }
?>
An if statement is made up of the if keyword, a condition like we've seen before, and a pair of curly braces { }. If the answer to the condition is yes, the code inside the curly braces will run.

Instructions
On line 7, set $items equal to a number greater than 5. Make sure to put a semicolon at the end of the line.
On line 9, edit the condition so that your program will print out You get a 10% discount! -->

<html>
  <head>
  </head>
  <body>
    <p>
      <?php
        $items =  8;  // Set this to a number greater than 5!
        
        if($items > 5) {
          echo "You get a 10% discount!";
        }
      ?>
    </p>
  </body>
</html>

<!-- Adding an Else
Great! We used an if statement to do something if the answer to the condition was yes, or true as we say in PHP.

In addition to doing something when the condition is true, we can do something else if the condition is false. We can do this using an if / else statement:

<?php
  $name = "Edgar";

  if ($name == "Simon") {
    print "I know you!";
  }
  else {
    print "Who are you?";
  }
?>
Just like before, if the condition is true, then only the code inside the first pair of curly braces will run. Otherwise, the condition is false, so only the code inside the second pair of curly braces after the else keyword will run.

In the example above the condition $name == "Simon" evaluates to false since $name is Edgar. Since the condition is false, only the code inside the curly braces after the else keyword runs, and prints out Who are you?

Instructions
Under your if statement on line 12, write an else statement to capture the people who are only buying 5 items or fewer. In their case, use echo to output "You get a 5% discount!" -->

<html>
  <head>
  </head>
  <body>
    <p>
      <?php
        $items = 3;
        
        if($items > 5) {
          echo "You get a 10% discount!";
        }
        else {
            echo "You get a 5% discount!";
        }
        
      ?>
    </p>
  </body>
</html>

<!-- All Together Now!
Great work! Now let's practice using if / else statements. Do as much as you can by yourself, but if you need a reminder, click the "Stuck? Get a hint!" button below.

Instructions
On line 8, write an if / else statement, just like we did in the last exercise. Here's what the outline of the code looked like:
<?php
  if (this condition is true) {
    // do this code
  }
  else {
    // do this code instead
  }
?>
If your condition is true, your code should echo "The condition is true"

Otherwise (else) when it is false, your code should echo "The condition is false".

Make sure your condition evaluates to false, so that your program prints out "The condition is false". -->

<html>
  <head>
  </head>
  <body>
    <p>
      <?php
        // Write your if/elseif/else statement here!
        $items = 10;
        if($items < 8) {
            echo "The condition is true";
        }
        
        else {
            echo "The condition is false.";
        }
        
      ?>
    </p>
  </body>
</html>