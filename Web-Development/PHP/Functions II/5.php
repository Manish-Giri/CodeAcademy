<!-- The Return Keyword
Instead of printing something to the screen, what if you want to make it the value that the function outputs so it can be used elsewhere in your program? In PHP, the return keyword does just that. It returns to us a value that we can work with. The difference between this and echo or print is that it doesn't actually display the value.

Think of it like a calculator solving a mathematical problem that takes several steps to complete. The value from each step is computed, but we don't see the result until we get the final answer. In other words, each value is returned and the final answer is echoed on screen for us.

Instructions
On line 8, write a function called returnName that returns your name.

Notice how nothing is displayed in the results panel. Even though it is not visible, calling our function will still give us back our string, we just haven't done anything with it yet. -->

<html>
	<head>
		<title></title>
	</head>
	<body>
      <?php
        function returnName() {
            return "Manish Giri";
        }
      ?>
    </body>
</html>