<!-- All On Your Own!
It's time to show what you have learned about switches so far!

Instructions
Create a switch statement with 3 different cases and a default case if you wish. Feel free to use the alternative syntax as well! -->

<!DOCTYPE html>
<html>
    <head>
		<title></title>
	</head>
	<body>
    <?php
    
    $myAge = 26;
    switch($myAge) {
        case 14: echo "You're too young to drive";
        break;
        
        case 20: echo "You're fine but be safe";
        break;
        
        case 26: echo "You drive well!";
        break;
        
        default: echo "I don't know your age";
    }
     
    ?>
	</body>
</html>