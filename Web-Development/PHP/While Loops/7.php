<!-- All On Your Own!
Now it is time for you to write your own do/while loop. You could try to implement one of your for or while loops using a do/while structure, or you could try something completely different.

But whatever you do, please do not write an infinite loop. And if you do submit one, refresh the page to stop it.

Instructions
Create a do/while loop below the comment within the <?php ?> tags in the editor. Then click Save & Submit Code to make sure it behaves the way you think it should. -->
<!DOCTYPE html>
<html>
    <head>
		<title>Your own do-while</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
        //write your do-while loop below
        var $num = 10;
        do {
            echo "<p>$num</p>";
            $num--;
        } while($num > 0);
        
    ?>
    </body>
</html>