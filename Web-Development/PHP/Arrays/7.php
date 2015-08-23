<!-- Deleting Array Elements
Finally, you can remove elements using unset:

<?php
  $array = array("red", "blue", "green");
  unset($array[2]);
?>
You can even delete the whole array:

<?php
  unset($array);
?>
Instructions
Go ahead and remove "Python" from the $languages array using unset(). -->



<html>
  <head>
    <title>Modifying Elements</title>
  </head>
  <body>
    <p>
      <?php
        $languages = array("HTML/CSS",
        "JavaScript", "PHP", "Python", "Ruby");
        // Write the code to remove Python here!
        unset($languages[3]);
        
        
        // Write your code above this line. Don't
        // worry about the code below just yet; we're
        // using it to print the new array out for you!
        
        foreach($languages as $lang) {
          print "<p>$lang</p>";
        }
      ?>
    </p>
  </body>
</html>