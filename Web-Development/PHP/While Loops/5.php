<!-- How Do You Do-While?
You may have noticed that a while loop checks the loop condition before each iteration of the code inside. A logical alternative is to check the condition after each iteration before looping back. A do/while loop does just that. One consequence of this difference is that the code inside a while loop can be bypassed entirely whereas the code inside a do/while loop will execute at least once.

This means that the loop condition can depend exclusively on code within the loop's body. This is the case for the code in the editor where each iteration represents a coin flip, and any time the result of the coin flip is tails, the loop stops.

Instructions
Inspect the code within the editor to see if you understand how it will work. If you don't, no worries! Click Save & Submit Code and see what happens. -->

<!DOCTYPE html>
<html>
    <head>
    	<link type='text/css' rel='stylesheet' href='style.css'/>
		<title>More Coin Flips</title>
	</head>
	<body>
	<p>We will keep flipping a coin as long as the result is heads!</p>
	<?php
	$flipCount = 0;
	do {
		$flip = rand(0,1);
		$flipCount ++;
		if ($flip){
			echo "<div class=\"coin\">H</div>";
		}
		else {
			echo "<div class=\"coin\">T</div>";
		}
	} while ($flip);
	$verb = "were";
	$last = "flips";
	if ($flipCount == 1) {
		$verb = "was";
		$last = "flip";
	}
	echo "<p>There {$verb} {$flipCount} {$last}!</p>";
	?>
    </body>
</html