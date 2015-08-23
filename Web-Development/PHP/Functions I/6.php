<!-- Array Functions I
Arrays are a very common thing to use in programming. In fact, array() is actually a function! Good job, you have already used an array function.

Aside from the array() function itself, array_push() is arguably the most common and useful function for manipulating arrays.

array_push() takes two arguments: an array, and an element to add to the end of that array. Here's an example:

$fav_bands = array();
array_push($fav_bands, "Maroon 5");
array_push($fav_bands, "Bruno Mars");
array_push($fav_bands, "Nickelback");
array_push($fav_bands, "Katy Perry");
array_push($fav_bands, "Macklemore");
Another cool array function is count(). Passing an array to count() will return the number of elements in that array. Like this:

print count($fav_bands); // prints 5
Instructions
Use the editor to create an array and use array_push() to add at least 5 elements to it. Once all your elements are added, print out the number of elements in your array. -->

<html>
    <p>
	<?php
	// Create an array and push 5 elements on to it, then 
    // print the number of elements in your array to the screen
    $arr = array();
    
    array_push($arr, "one");
    array_push($arr, "two");
    array_push($arr, "three");
    array_push($arr, "four");
    array_push($arr, "five");
    
    print count($arr);

	?>
	</p>
</html>