<!-- Modifying Array Elements
An item in an array can be changed by specifying its position and providing a new value, like this:

<?php
$myArray = array("red", "blue", "yellow");

echo $myArray[1];
// outputs "blue"

$myArray[1] = "green";

echo $myArray[1];
// outputs "green"
?>
First we create a new array $myArray with a list of colors.
Then we output the item at position 1. Since items are numbered starting from 0, "blue" is at position 1
Next we change the item at position 1 to "green".
Now when we output the item at position 1, we get "green".
Instructions
In line 8, there's an array named $languages. 
1. Change an item in the $languages array. You can take your pick! 
2. Then use echo to output $languages. -->


<html>
  <head>
    <title>Modifying Elements</title>
  </head>
  <body>
    <p>
      <?php
        $languages = array("HTML/CSS",
        "JavaScript", "PHP", "Python", "Ruby");
        
        // Write the code to modify
        // the $languages array!
        $languages[3] = "Java";
        echo($languages[3]);
        
      ?>
    </p>
  </body>
</html>