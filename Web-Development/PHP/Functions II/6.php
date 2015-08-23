<!-- Parameters and Arguments
Functions wouldn't be nearly as useful if they weren't able to take in some input. This is where parameters or arguments come in. These are the variables or inputs that a function uses to perform calculations.

function squareValue($number) {
  echo $number * $number;
} 

$n = 6;
squareValue($n); // echos 36
The function squareValue, above, takes one parameter, which it multiplies by itself and then echos the result. The names of the parameters themselves are used internally within the function, so they should be named something helpful.

You can also use multiple parameters as long as they are separated by commas.

Instructions
Write a function called greetings.
It should take $name as a parameter.
The function should echo a string equal to "Greetings, " . $name . "!".
Then call greetings() with your name to test it out! -->

<html>
	<head>
		<title></title>
	</head>
	<body>
      <p>
        <?php
        function greetings($name) {
            echo "Greetings, "."$name "."!";
        }
        
        greetings("Manish");
        
        ?>
      </p>
    </body>
</html>