<!-- Practicing with ForEach
Let's walk through the foreach syntax step-by-step. First, here's a foreach loop that iterates over an array and prints out each element it finds:

<?php
  $numbers = array(1, 2, 3);

  foreach($numbers as $item) {
      echo $item;
  }
?>
First, we create our array using the array() syntax we learned in the last lesson.

Next, we use the foreach keyword to start the loop, followed by parentheses. (This is very similar to what we've done with for loops.)

Between the parentheses, we use the $numbers as $item) syntax to tell PHP: "For each thing in $numbers, assign that thing temporarily to the variable $item." (We don't have to use the name $item—just as with for loops, we can call our temporary variable anything we want.)

Finally, we put the code we want to execute between the curly braces. In this case, we just echo each element in turn.

Instructions
Complete the foreach loop in the editor by replacing the ___s with the correct loop syntax. Use the example in the instructions as a guide! -->

<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        $sentence = array("I'm ", "learning ", "PHP!");
        
        foreach ($sentence as $word) {
          echo $word;
        }
      ?>
    </p>
  </body>
</html>
