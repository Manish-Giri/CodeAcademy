<!-- Math Functions I
Let's move on to a bit of arithmetic. The most common Math function you'll use is round(). This function rounds floating point numbers (numbers with decimal points in them) up or down.

You can use round() to round your number to an integer, or to round off complex floating point numbers to a specific number of decimal places. This is accomplished by passing a second, optional parameter to round(), telling it how many decimal places you want the number rounded to.

Here's an example:

// Round pi down from 3.1416...
$round = round(M_PI);
print $round;  // prints 3

// This time, round pi to 4 places
$round_decimal = round(M_PI, 4);
print $round_decimal; // prints 3.1416
NOTE: M_PI is a PHP constant that is equal to pi.

Instructions
Use the exercise window to try rounding some numbers for yourself. You can use M_PI if you like; it's my favorite floating point number. -->

<html>
    <p>
    <?php
    // Try rounding a floating point number to an integer
    // and print it to the screen
    $num = round(M_PI);
    print $num;
    
    ?>
    </p>
    <p>
    <?php
    // Try rounding a floating point number to 3 decimal places
    // and print it to the screen
    $num1 = round(M_PI, 3);
    print $num1;
    ?>
    </p>
</html>