<!-- Class and Object Methods
Remember when we covered built-in functions in PHP? Well, we can combine that idea with our knowledge of classes and objects: that is, there are built-in PHP functions that tell us interesting information about the classes and objects we've created!

Check out the example in the editor to the right. We're demoing three useful built-in methods: is_a(), which we use to find out if a particular object is an instance of a given class; property_exists(), to see if an object has a given property; and method_exists(), to see if an object has a given method.

Note that the first argument is the object we're checking, and the second is the class, property, or method name as a "string".

Instructions
Make sense? Awesome! Click Save & Submit Code when you're ready to move on. -->

<html>
  <head>
    <title>Class and Object Methods</title>
  </head>
  <body>
    <p>
      <?php
        class Person {
          public $isAlive = true;
          
          function __construct($name) {
              $this->name = $name;
          }
          
          public function dance() {
            return "I'm dancing!";
          }
        }
        
        $me = new Person("Shane");
        if (is_a($me, "Person")) {
          echo "I'm a person, ";
        }
        if (property_exists($me, "name")) {
          echo "I have a name, ";
        }
        if (method_exists($me, "dance")) {
          echo "and I know how to dance!";
        }
      ?>
    </p>
  </body>
</html>