# Instantiating Your First Object
# Perfect! Now we're ready to start creating objects.

# We can access attributes of our objects using dot notation Here's how it works:

# class Square(object):
  # def __init__(self):
    # self.sides = 4

# my_shape = Square()
# print my_shape.sides

# First we create a class named Square with an attribute sides.
# Outside the class definition, we create a new instance of Square named my_shape and access that attribute using my_shape.sides.
# Instructions
# Outside the Animal class definition, create a variable named zebra and set it equal to Animal("Jeffrey").
# Then print out zebra's name.
# Click "Stuck? Get a hint!" for an example.

class Animal(object):
    def __init__(self, name):
        self.name = name
zebra = Animal("Jeffrey")
print zebra.name