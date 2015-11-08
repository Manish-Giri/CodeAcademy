# Inheritance Syntax
# In Python, inheritance works like this:

# class DerivedClass(BaseClass):
    # # code goes here
# where DerivedClass is the new class you're making and BaseClass is the class from which that new class inherits.

# Instructions
# On lines 1-4, we've created a class named Shape.

# Create your own class, Triangle, that inherits from Shape, like this:

# class Triangle(Shape):
    # # code goes here
# Inside the Triangle class, write an __init__() function that takes four arguments: self, side1, side2, and side3.

# Inside the __init__() function, set self.side1 = side1, self.side2 = side2, and self.side3 = side3.

# Click "Stuck? Get a hint!" for an example.

class Shape(object):
    """Makes shapes!"""
    def __init__(self, number_of_sides):
        self.number_of_sides = number_of_sides

# Add your Triangle class below!
class Triangle(Shape):
    def __init__(self, side1, side2, side3):
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3
        