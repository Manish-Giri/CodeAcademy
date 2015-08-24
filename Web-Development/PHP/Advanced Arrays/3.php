<!-- Using Arrays as Maps
You can think of an associative array (also called a map) as being the same as a normal array, but instead of using an integer to refer to the value, you use a defined key.

While numeric indices may be fine for looping through an array and listing all of the values, what if we need to change a certain value from an array?

Instructions
For each array in the editor, add the value "BMW" to the end of the array. For the associative array, use "make" as the key. You can add a key just as shown in the editor:
'key' => value
(You'll see a PHP error until you add the missing array elements. -->

<html>
  <head>
    <title>Making the Connection</title>
  </head>
  <body>
    <p>
      <?php
        // This is an array using integers as the indices.
        // Add 'BMW' as the last element in the array!
        $car = array(2012, 'blue', 5, "BMW");

        // This is an associative array.
        // Add the make => 'BMW' key/value pair!
        $assocCar = array('year' => 2012,
                   'colour' => 'blue',
                   'doors' => 5, 
                   'make' => 'BMW');
            
        // This code should output "BMW"...
        echo $car[3];
        echo '<br />';
            
        // ...and so should this!
        echo $assocCar['make'];
      ?>
    </p>
  </body>
</html>