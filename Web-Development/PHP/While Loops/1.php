<!-- Looping the Loop
A loop is a structure that tells a computer to execute a set of statements multiple times. If you have a process that you want repeated hundreds of times, it pays to put it in a loop so you don't need to write hundreds of lines of code.

If you are working on these courses in order, you have already seen how a for loop can allow for a set number of loop iterations. But what about a situation where (due to randomness, perhaps) you don't know how many times the loop should repeat? In that case, you can use a while loop.

A while loop will execute as long as a certain condition is true. For example, the loop in the editor will simulate coin flips as long as the number of consecutive heads is less than 3.

Instructions
Take a look at the code in the editor and see if you understand how it will work. Once you think you know (or if you're stumped, no pressure!) click Save & Submit Code and see what happens. Check the hint if you would like an explanation. -->

<!DOCTYPE html>
<html>
    <head>
    	
		<title>Coin Flips</title>
		<style type="text/css">
		.coin {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: gray;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
		</style>
	</head>
	<body>
	<p>We are going to flip a coin until we get three heads in a row!</p>
	<?php
	$headCount = 0;
	$flipCount = 0;
	while ($headCount < 3) {
		$flip = rand(0,1);
		$flipCount ++;
		if ($flip){
			$headCount ++;
			echo "<div class=\"coin\">H</div>";
		}
		else {
			$headCount = 0;
			echo "<div class=\"coin\">T</div>";
		}
	}
	echo "<p>It took {$flipCount} flips!</p>";
	?>
    </body>
</html>