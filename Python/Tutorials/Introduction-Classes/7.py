# Class Scope
# Another important aspect of Python classes is scope. The scope of a variable is the context in which it's visible to the program.

# It may surprise you to learn that not all variables are accessible to all parts of a Python program at all times. When dealing with classes, you can have variables that are available everywhere (global variables), variables that are only available to members of a certain class (member variables), and variables that are only available to particular instances of a class (instance variables).

# The same goes for functions: some are available everywhere, some are only available to members of a certain class, and still others are only available to particular instance objects.

# Instructions
# Check out the code in the editor. Note that each individual animal gets its own name and age (since they're all initialized individually), but they all have access to the member variable is_alive, since they're all members of the Animal class. Click Save & Submit Code to see the output!

class Animal(object):
    """Makes cute animals."""
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age

zebra = Animal("Jeffrey", 2)
giraffe = Animal("Bruce", 1)
panda = Animal("Chad", 7)

print zebra.name, zebra.age, zebra.is_alive
print giraffe.name, giraffe.age, giraffe.is_alive
print panda.name, panda.age, panda.is_alive