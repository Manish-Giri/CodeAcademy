<!-- Review of Arrays
Arrays are a useful way to store multiple values, like numbers, strings, and even other arrays:

$myArray = array(1, 2, 3);
Here we create an array of three numbers. Remember that array positions start from 0; therefore to access the third item in this array, we type:

$myArray[2];
Instructions
On line 8, set $fruits equal to an array of three strings: 'bananas', 'apples' and 'pears'.
Modify the echo statement on line 9 to display the fruit in the middle of the array (that is, it should echo "apples". -->

<html>
  <head>
    <title>Array Review</title>
  </head>
  <body>
    <p>
      <?php
        $fruits =  Array("bananas", "apples", "pears");             /* Your code here! */
        echo 'I love eating ' . $fruits[1] . ' too!';
      ?>
    </p>
  </body>
</html>