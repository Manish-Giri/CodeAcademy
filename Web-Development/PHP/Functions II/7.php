<!-- Practice Makes Perfect
Hopefully throughout these exercises you have learned the basics of defining and calling your own functions using PHP. To summarize this section we are going to have to take all of what we have learned and apply it once more!

Instructions
Write a function called aboutMe.
It takes two parameters $name and $age.
It should echo out "Hello! My name is $name, and I am $age years old.".
Call your function and check out the results panel to see if it works! -->

<html>
	<head>
		<title></title>
	</head>
	<body>
      <p>
        <?php
        
        function aboutMe($name, $age) {
            echo "Hello! My name is $name, and I am $age years old.";
        }
        
        aboutMe("Manish", 26);
      
        ?>
      </p>
    </body>
</html>