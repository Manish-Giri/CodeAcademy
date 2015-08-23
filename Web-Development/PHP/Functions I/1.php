<!-- Introducing Functions
Functions are reusable pieces of code that you can use throughout an application, saving you lots of copying and pasting.

PHP has lots of built-in functions, and we'll learn some of them in these exercises. The first set of functions we'll learn about are string manipulation functions.

strlen() is one of the most common String functions in PHP. You pass it a string, or variable containing a string, and it returns the number of characters in that string. An example might be:

<?php
  // get the length of a string and
  // print it to the screen
  $length = strlen("david");
  print $length;
?>
Instructions
Use the index.php tab to write your own code.

Get the length of your own name, as I did for mine, and print it to the screen. -->

<html>
  <p>
    <?php
    // Get the length of your own name
    // and print it to the screen!
    $length = strlen("manish");
    print $length;

    ?>
  </p>
</html>