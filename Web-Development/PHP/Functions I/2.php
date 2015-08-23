<!-- String Functions I
Another very common string function is substr(). This function allows you to return a substring (piece of) of your string.

You pass this function the string you want to get a substring of, the character in your string to start at, and how many characters you want after your starting point. An example might be:

$myname = "David";

// you can manipulate strings easily
// with built-in funtions too
$partial = substr($myname, 0, 3);
print $partial;
// prints "dav"
NOTE: the second parameter (the starting character) is based on a zero-indexed array (i.e. the first character in your string is number 0, not number 1).

Two other very useful string functions are strtoupper() and strtolower(), which make your entire string UPPERCASE or lowercase. Here is an example of each:

$uppercase = strtoupper($myname);
print $uppercase;
// prints "DAVID"

$lowercase = strtolower($uppercase);
print $lowercase;
// prints "david"
You can also call these functions on a string directly, like so:

print strtolower("David");
// prints "david"
Instructions
Use the index.php tab to write your own code.

Get a partial string from within your own name and print it to the screen. Then try making your name upper case and lower case and print those to the screen as well. -->


<html>
  <p>
    <?php
    // Get a partial string from within your own name
    // and print it to the screen!
    $myName = "Manish Giri";
    $partial = substr($myName, 0, 6);
    print $partial;

    ?>
  </p>
  <p>
    <?php
    // Make your name upper case and print it to the screen:
    print strtoupper($myName);
    
    ?>
  </p>
  <p>
    <?php
    // Make your name lower case and print it to the screen:
    print strtolower($myName);
    ?>
  </p>
</html>