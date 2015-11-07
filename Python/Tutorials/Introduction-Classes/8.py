# A Methodical Approach
# When a class has its own functions, those functions are called methods. You've already seen one such method: __init__(). But you can also define your own methods!

# Instructions
# Add a method, description, to your Animal class. Using two separate print statements, it should print out the name and age of the animal it's called on. Then, create an instance of Animal, hippo (with whatever name and age you like), and call its description method.

class Animal(object):
    """Makes cute animals."""
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age
    # Add your method here!
    def description(self):
        print self.name
        print self.age
        
hippo = Animal("Jeff", 2)
hippo.description()
