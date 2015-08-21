<!-- Switch Syntax
A switch statement is similar to an if / elif / else statement in that you can check multiple conditions. Here's what it looks like:

$myNum = 2;

switch ($myNum) {
    case 1:
        echo "1";
        break;
    case 2:
        echo "2";
        break;
    case 3:
        echo "3";
        break;
    default:
        echo "None of the above";
}
A switch statement is made up of the switch keyword, a variable to check, and a pair of curly braces { }. Here we check the value of $myNum.
Then we have a case block for each comparison. For example case 1: echo "1"; break; checks whether $myNum is equal to 1. If yes, it echos "1", and uses break to exit the switch statement.
Otherwise, the next case block runs.
If all cases return false, the default case gets executed.
Instructions
On line 10, there's a switch statement

Fill the __ spots with the correct code. Check out the example above
Add the default case. -->

<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
    <?php
    $fruit = "Apple";
    
    switch ($fruit) {
        case__ 'Apple':
            echo "Yummy.";
            break;
        default: echo "Don't know";
        
    }
    
    ?>
    </body>
</html>