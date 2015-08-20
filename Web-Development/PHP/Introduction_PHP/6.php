<!-- Strings
A string is a word or phrase between quotes, like so: "Hello, world!"

You can type a string all at once, like this:

<?php
  echo "Hello, world!";
?>
Or use the concatenation operator, which glues several strings together:

<?php
   echo "Hello," . " " . "world" . "!";
?>
The concatenation operator is just a dot (.). (If you're coming to PHP from JavaScript, the dot does the same thing for strings that + does in JavaScript.)

Instructions
Go ahead and echo a string of your choice on line 8. Try out the concatenation operator if you're feeling bold! -->

<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
        <p>
          <?php
            echo "Hi"." Manish,"." Good"." Evening"."!"
          ?>
        </p>
	</body>
</html>