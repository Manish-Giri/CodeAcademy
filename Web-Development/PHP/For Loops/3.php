<!-- Writing Your First 'For' Loop
Great work! Now let's put together our first for loop from start to finish.

A for loop that prints out the numbers 1 through 10 might look something like this:

for ($i = 0; $i < 11; $i++) {
    echo $i;
}
This for loop counts up by 1 each time, all the way to 10.

You could change the third part of the for loop so that it counts up by 5 instead, like this:

for ($i = 0; $i < 11; $i = $i + 5) {
    echo $i;
}
Instead of $i++, we have $i = i + 5 to count up by 5, all the way to 10.

Instructions
Write a for loop that counts up by 10, all the way to 100 (e.g. 10, 20, 30...). Inside the for loop, echo the current value of $i, just like in the examples above. -->

<html>
  <head>
    <title>Solo For Loop!</title>
  </head>
  <body>
    <p>
      <?php
      // Write your for loop below!
                for($i=10; $i <= 100; $i+=10) {
            echo $i;
        }
      
      ?>
    </p>
  </body>