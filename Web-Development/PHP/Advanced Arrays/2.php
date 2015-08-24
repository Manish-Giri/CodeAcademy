<!-- Associative Arrays
So far, you have been accessing the values of an array using integers. This is all well and good, but if you want to be more descriptive of your data, you can make use of something called an associative array.

An associative array makes use of (key => value) pairs. Some languages may separate arrays from associative arrays, but PHP treats both as the same.

In the editor, you will see I have declared two variables as arrays. Have a look at the first array and see if you can guess what item those values may refer to?

Now have a look at the array below it. This is an associative array. It's defined as an array like the first one, but see how I have specified keys for each of the values?

Both arrays contain the same values, but in the associative array, we can access the value using a specified "key".

Instructions
Make sense? Click Save & Submit Code when you think you've got it! -->

<html>
  <head>
    <title>Associate Arrays</title>
  </head>
  <body>
    <p>
      <?php
        // This is an array using integers as the indices...
        $myArray = array(2012, 'blue', 5);

        // ...and this is an associative array:
        $myAssocArray = array('year' => 2012,
                        'colour' => 'blue',
                        'doors' => 5);
            
        // This code will output "blue"...
        echo $myArray[1];
        echo '<br />';
            
        // ... and this will also output "blue"!
        echo $myAssocArray['colour'];
      ?>
    </p>
  </body>
</html>