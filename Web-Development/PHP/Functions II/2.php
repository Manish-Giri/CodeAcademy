<!-- Function Syntax
The typical structure of a function is as follows:

function name(parameters) {
  statement;
}
The keyword function indicates that the code following it will be a user-defined function.

name indicates the name of a function, which is case insensitive. The name of a function can contain numbers, letters, underscores or dashes.

The arguments, or parameters, will be the optional input a function uses to perform calculations.

And of course, the statements themselves will be the code the function executes when it is called.

Instructions
Take a look at the helloWorld() function to the right. It takes no parameters, and when called it will simply print the string "Hello world!".

Press Save & Submit Code to continue to the next exercise. -->

html>
    <head>
		<title></title>
	</head>
	<body>
      <p>
        <?php
          // Here we define the function...
          function helloWorld() {
            echo "Hello world!";
          }
          
          // ...and here we call it!
          helloWorld();
        ?>
      </p>
    </body>
</html>