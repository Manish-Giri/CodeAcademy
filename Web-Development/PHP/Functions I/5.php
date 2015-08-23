<!-- Math Functions II
A very common and useful function is rand(). This function returns a random number between two numbers. Optionally, you can provide your min and max numbers as parameters, like this:

// prints a number between 0 and 32767
print rand();

// prints a number between 1 and 10
print rand(1,10);
Instructions
Use the editor to print a random number.
Create a new variable $name and store your name in it.
Then print a random character from your name. Use your knowledge of strlen(string), rand(min, max), and substr(string, start, length) to do this.
HINT: Remember that substr() treats characters in a string as a zero-indexed array (first letter is at position zero). This means that the last character in the string will be at position length - 1. -->

<html>
    <p>
    <?php
    // Use rand() to print a random number to the screen
    print rand();
    
    ?>
    </p>
    <p>
    <?php
    // Use your knowledge of strlen(), substr(), and rand() to
    // print a random character from your name to the screen.
    $name = "Manish Giri";
    $len = strlen($name);
    $num = rand(0,1);
    print substr($name, 0,$num);

    ?>
    </p>
</html>