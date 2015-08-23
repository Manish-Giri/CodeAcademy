<!-- Array Functions II
Another common thing to do with arrays is sort them. Handily enough, PHP has a sort() function for just such an occasion!

$array = array(5, 3, 7, 1);
sort($array);
print join(", ", $array);
// prints "1, 3, 5, 7"
PHP also has the opposite function: rsort().

$array = array(5, 3, 7 ,1);
rsort($array);
print join(":", $array);
// prints "7:5:3:1"
Lastly, we use join(glue, array) so we can easily print out the representations of our sorted arrays in this exercise.

For this exercise, we'll use a comma (,) as the glue.

Instructions
On line 6, use array() to create an array with several elements and store it in $the_array.
Next, sort() the array.
Then, print out join("," $the_array).
On line 12, rsort() the array.
Finally, join() and print the reverse-sorted array to the screen. -->

<html>
    <p>
	<?php
	// Create an array with several elements in it,
	// then sort it and print the joined elements to the screen
	$arr = array(9,11,2,4,20,430,88);
	sort($arr);
	print join(",", $arr);

	?>
	</p>
	<p>
	<?php
	// Reverse sort your array and print the joined elements to the screen
	rsort($arr);
	print join(",", $arr);

	?>
	</p>
</html>