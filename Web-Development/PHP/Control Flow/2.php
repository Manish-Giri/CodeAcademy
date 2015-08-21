<!-- Dipping Your Toe into Switch statements
In the editor you see a simple switch statement. A switch statement comes in handy when you have a series of if/elseif/else statements with multiple expressions that depend on the same value. The switch statement also provides a bit of efficiency and readability. Switches work like if statements, if a condition is true, it executes a block of code.

Instructions
Try and figure out which of these case blocks gets executed and smash that Submit button! -->

<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
    <?php
    switch (2) {
        case 0:
            echo 'The value is 0';
            break;
        case 1:
            echo 'The value is 1';
            break;
        case 2:
            echo 'The value is 2';
            break;
        default:
            echo "The value isn't 0, 1 or 2";
    }
    ?>
    </body>
</html>