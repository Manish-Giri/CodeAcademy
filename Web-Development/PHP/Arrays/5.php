<!-- Access by Offset with { }
PHP is a very flexible language. When accessing arrays by offset, you can actually use two different types of syntax: the [] syntax we've covered, or you can use curly braces ({}). You use the curly braces just like you use the square brackets:

<?php
 $myArray = array("do", "re", "mi");
 print $myArray{2};
 // prints "mi";
?>
Both forms are equivalent, and using one or the other is totally up to you!

Instructions
Go ahead and update your previous code to use the {} syntax instead of []. -->

<html>
  <head>
    <title>Accessing Elements</title>
  </head>
  <body>
    <p>
      <?php
        $tens = array(10, 20, 30, 40, 50);
        echo $tens{2};
      ?>
    </p>
  </body>
</html>