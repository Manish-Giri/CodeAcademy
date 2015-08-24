<!-- Putting It All Together
Great work! You've learned a lot so far, including:

Useful object and class methods, like property_exists() and method_exists();
Inheritance;
How child classes can override the behavior of their parents;
How parent classes can prevent this with the final keyword;
What class constants are and how to reach them using the scope resolution operator, ::;
How to access class methods and properties without creating an instance of the class by using the static keyword and the scope resolution operator together.
Let's put all our newfound knowledge to work in one final (pun intended) exercise!

Instructions
Create a class called Person. It should contain only a single method, say(), that should take no arguments and echo: `"Here are my thoughts!";
Create another class, Blogger, that inherits from Person. It should contain only a single constant, cats, set to 50.
Use the static keyword and the scope resolution operator to call Blogger's inherited say() method without creating an instance of the class.
Use the scope resolution operator to echo the cats constant to the page.
Give it a go, and check out the Hint if you need a syntax refresher! -->

<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
      
      class Person {
          public static function say() {
              echo "Here are my thoughts!";
          }
      }
      
      class Blogger extends Person {
          const cats = 50;
      }
      
      Blogger::say();
      
      echo Blogger::cats;
      
      ?>
    </p>
  </body>
</html>