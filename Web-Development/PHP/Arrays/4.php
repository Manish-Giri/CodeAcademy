<!-- Access by Offset with [ ]
Each item in an array is numbered starting from 0. For example, when we create an array:

<?php
$myArray = array("do", "re", "mi");
?>
Each item is numbered starting from 0, like this:

+------+------+------+
| "do" | "re" | "mi" |
+------+------+------+
   0      1      2      
The item "do" is in position 0, the item "re" is in position 1, and so on.

Therefore, we can access a particular item of the array using its position, like this:

<?php
$myArray = array("do", "re", "mi");

echo $myArray[0]
// outputs "do"
?>
First we create an array named $myArray
Then we use echo to output the first item in $myArray. Since items are numbered starting from 0, "do" is at position 0.
Instructions
In line 8, there's an array named $tens. Use echo to output the third item in $tens. Remember that items are numbered starting from 0. -->

<html>
  <head>
    <title>Accessing Elements</title>
  </head>
  <body>
    <p>
      <?php
        $tens = array(10, 20, 30, 40, 50);
        echo $tens[2];
      ?>
    </p>
  </body>
</html>