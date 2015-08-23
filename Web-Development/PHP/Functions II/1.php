<!-- Function Refresher
Don’t Repeat Yourself! This is a very simple, yet fundamental principle in programming.

Whenever you feel the need to rewrite a block of code, remember that it can probably be written as a function instead. You've seen some of PHP's built-in functions, but you can also define your own!

By using one function instead of several blocks of the same code, you can reduce the amount of clutter in your document and keep your code neat and tidy.

Instructions
Let's do a little review. On line 8, use the strlen() function to echo the number of characters in your name. -->

<html>
    <head>
		<title></title>
	</head>
	<body>
      <p>
        <?php
          $len = strlen("manish giri");
          echo "<p>$len</p>";
        ?>
      </p>
    </body>
</html>