<!-- Using Endwhile
PHP offers the following alternative syntax for while loops:

while(cond):
   // looped statements go here
endwhile;
Note the colon after the end parenthesis and the semicolon after the endwhile statement.

When they are embedded in HTML, loops that use this endwhile syntax can be more readable than the equivalent syntax involving curly braces.

    while(cond) {
       // looped statements go here
    }

Feel free to use whichever syntax you prefer... except on this exercise!

Instructions
Convert your while loop from the last exercise into endwhile syntax. Then click Save & Submit Code to make sure your new loop works just like the old one. -->

<!DOCTYPE html>
<html>
    <head>
		<title>A loop of your own</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
	//Add while loop below
	$number = 10;
	while ($number > 0) :
	    echo "<p>$number</p>";
	    $number--;
	endwhile;
    
    </body>
</html>