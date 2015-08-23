<!-- Show What You Know!
Let's take what we've learned about strings, math, and arrays and create a game. In our game, we'll make a list of our closest family and friends and have a lottery. We will "spin the wheel" and randomly select one of our family and friends from the list.

Because winning is a big deal, we'll have to display the winner's name to the public in ALL CAPS. Let's go!

Instructions
Create an array() with the names of your closest family and friends. The more names in your array, the more fun your game will be!

After you've created your list, sort it and randomly select a name from the list.

When you have your winning name, print it to the screen in caps so everyone knows how awesome the winner is.

Functions we'll use here: array(), array_push(), sort(), count(), rand(), and strtoupper(). Play around with some of the other functions you've learned as well. -->

<html>
    <p>
	<?php
	// Create an array and push on the names
    // of your closest family and friends
    $names = array();
    array_push($names, "Tim");
    array_push($names, "Shaun");
    array_push($names, "Ron");
    array_push($names, "Duke");
    array_push($names, "Anderson");
    
	// Sort the list
	sort($names);

	// Randomly select a winner!
	$len = count($names);
	$num = rand(0, $len-1);
	
	

	// Print the winner's name in ALL CAPS
	print strtoupper($names[$num]);

	?>
	</p>
</html>