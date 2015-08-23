<!-- All On Your Own!
Great work! Now let's see you write a foreach loop all on your own.

Instructions
On line 8, there's an array named $yardlines. Write a foreach loop that iterates over the array and echos each element to the page. -->

<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        $yardlines = array("The 50... ", "the 40... ",
        "the 30... ", "the 20... ", "the 10... ");
        // Write your foreach loop below this line
        foreach($yardlines as $yard){
            echo $yard;
        }
        
        
        // Write your foreach loop above this line
        echo "touchdown!";
      ?>
    </p>
  </body>
</html>