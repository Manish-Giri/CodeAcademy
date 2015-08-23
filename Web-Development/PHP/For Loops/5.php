<!-- Loops + Arrays = ForEach
The foreach loop is used to iterate over each element of an object—which makes it perfect for use with arrays!

You can think of foreach as jumping from element to element in the array and running the code between {}s for each of those elements.

Instructions
Check out the code in the editor. See how the $lang variable takes on the value of each of the elements in $langs, one by one, then echos that element to the page?

Click Save & Submit Code to learn how it all works! -->

<html>
  <head>
    
    <title>Codecademy Languages</title>
    <style type="text/css">
    h1 {
    font-family: Verdana, sans-serif;
    font-size: 18px;
}

ul {
    list-style-type: decimal-leading-zero;
    font-family: Tahoma, sans-serif;
}

.wrapper {
    height: 100px;
    border-radius: 5px;
    background-color: #C3E9FA;
}
    </style>
  </head>
  <body>
    <h1>Languages you can learn on Codecademy:</h1>
    <div class="wrapper">
      <ul>
        <?php
          $langs = array("JavaScript",
          "HTML/CSS", "PHP",
          "Python", "Ruby");
        
          foreach ($langs as $lang) {
              echo "<li>$lang</li>";
          }
        
          unset($lang);
        ?>
      </ul>
    </div>
  </body>
</html>