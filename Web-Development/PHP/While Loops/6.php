<!-- Completing the Loop
In the previous exercise, you saw how a do/while could be used to ensure that the code in a loop executed at least once. For example:

<?php
$i = 0;
do {
    echo $i;
} while ($i > 0);
?>
This do / while loop only runs once and then exits:

First we set $i equal to 0.
Second, the loop runs once and outputs $i, which is 0.
Then the condition while ($i > 0); is checked. Since $i is not greater than 0, the condition evaluates to false, and thedo/while` loop stops.
Instructions
Starting on line 9, there is a do / while loop that should run only once and then exit. But it's missing curly braces { }, parentheses ( ), and semicolons ;.

Fill in the missing { }, ( ) and ; to make sure the do/while loop runs correctly. Check out the do / while loop above for an example.
Then click "Save & Submit Code" and verify that the page looks the way you expected. -->

<!DOCTYPE html>
<html>
    <head>
		<title>Much a do-while</title>
	</head>
	<body>
    <?php
		$loopCond = false;
		do {
			echo "<p>The loop ran even though the loop condition is false.</p>";
		    } while ($loopCond);
		
		
		echo "<p>Now the loop is done running.</p>";
    ?>
    </body>
</html>