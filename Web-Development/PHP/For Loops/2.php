<!-- 'For' Loop Syntax
Cool, right? Let's go through the syntax slowly, step-by-step. Here's an example that just echos the numbers 0 to 9:

<?php
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
// echoes 0123456789
?>
It breaks down like this:

A for loop starts with the for keyword. This tells PHP to get ready to loop!
Next comes a set of parentheses (()). Inside the parentheses, we tell PHP three things, separated by semicolons (;): where to start the loop; where to end the loop; and what to do to get to the next iteration of the loop (for instance, count up by one).
After the part in parentheses, the part in curly braces ({}) tells PHP what code to run for each iteration of the loop.
So the above example says: "Start looping with $i at 0, stop the loop before $i gets to 10, count up by 1 each time, and for each iteration, echo the current value of $i."

($i++ is shorthand for $i = $i + 1. You'll see this a lot!)

Instructions
Complete the for loop in the editor by replacing the ___s with the correct loop syntax. Use the example in the instructions as a guide! -->

<html>
  <head>
    <title>For Loops</title>
  </head>
  <body>
    <p>
      <?php
        // Echoes the first five even numbers
        for ($i = 2; $i < 11; $i = $i + 2) {
          echo $i;
        }
      ?>
    </p>
  </body>
</html>