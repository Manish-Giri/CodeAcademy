<!-- Array Syntax
Have you noticed something familiar at the start of our array? That's right, it starts in the same way as a variable, with the $ sign, and then a name, followed by =.

However, this is when things start to get different. When declaring an array, we have to use array(). This basically tells PHP that $array is an array and not something else, such as a regular old variable.

By now, I am sure you have noticed the text inside the ( and ). This is just the items in our array. So, currently, our array has the items "Egg," "Tomato," and "Beans" in it. You can add any type of information to an array, and you do it in much the same way as when declaring variables. Use "" when adding strings, and just enter the number when adding integers.

You must always remember, however, that each item in an array must be separated by a comma: ,.

Instructions
Add two more items to our array, "Chips" and "Sausage". -->

<html>
  <head>
    <title>Woot, More Arrays!</title>
  </head>
  <body>
    <p>
      <?php
        // Add your array elements after
        // "Beans" and before the final ")"
        $array = array("Egg", "Tomato", "Beans", "Chips", "Sausage" );        
      ?>
    </p>
  </body>
</html>