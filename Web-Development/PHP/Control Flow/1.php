<!-- Glance at the Past!
Let's begin by first refreshing what we have done in the previous course.

Instructions
Write an if/elseif/else statement inside the editor and make it output anything you wish. -->

<!DOCTYPE html>
<html>
    <head>
		<title></title>
	</head>
	<body>
    <?php
    
    $myAge = 27;
    if($myAge < 15) {
        echo "You cannot drive";
    }
    
    else if($myAge < 22) {
        echo "You can drive but be careful";
    }
    else {
        echo "Happy driving!";
    }
    
    ?>
    </body>
</html>