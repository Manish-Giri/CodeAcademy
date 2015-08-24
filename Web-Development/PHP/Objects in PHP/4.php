<!-- Property Panic (1)
Great work, now we can add some properties to our class.

As you remember, properties are pieces of data bound to an object, and you can imagine an object as a bundle of information and actions.

class Fruit {
  public $count = 3;
  public $type;
}

$apple = new Fruit();
$apple->type = "apple";
print $apple->count; // 3
print $apple->type;  // apple
In the example above, we first create a new class called Fruit.
Then we add a property, $count, and set its value to 3.
Next, we add a property, $type, but don't store anything in it yet.
After the class definition, we create new instance of Fruit and store it in $apple.
Then we set the $type property of $apple to the string "apple".
Finally, we print out the two properties of $apple.
Let's try this out!

Instructions
Add a public $isAlive property to the Person class and assign the value true to $isAlive, like the $count property above.
Add three further public properties to thePerson class: $firstname, $lastname and $age. Don't assign any values to these like the $type property above.
echo the value of the $teacher's $isAlive property. -->

<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <!-- Your code here -->
        <?php
        class Person {
            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
        }
        
        $teacher = new Person();
        echo "$teacher->isAlive";
        $student = new Person();
        
        ?>
      </p>
    </body>
</html>