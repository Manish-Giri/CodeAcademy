# Class Basics
# First things first: let's create a class to work with.

# Instructions
# Create a class, Triangle. Its __init__() method should take self, angle1, angle2, and angle3 as arguments. Make sure to set these appropriately in the body of the __init__() method (see the Hint for more).

# Class It Up
# Great! Now let's add a member variable and a method to our class.

# Instructions
# Inside the Triangle class:

# Create a variable named number_of_sides and set it equal to 3.
# Create a method named check_angles. The sum of a triangle's three angles should return True if the sum of self.angle1, self.angle2, and self.angle3 is equal 180, and False otherwise.

# Instantiate an Object
# Let's go ahead and create an instance of our Triangle class.

# Instructions
# Create a variable named my_triangle and set it equal to a new instance of your Triangle class. Pass it three angles that sum to 180 (e.g. 90, 30, 60).
# Print out my_triangle.number_of_sides
# Print out my_triangle.check_angles().

# Inheritance
# Finally, let's create an Equilateral class that inherits from our Triangle class. (An equilateral triangle is a triangle whose angles are all 60˚, which also means that its three sides are equal in length.)

# Instructions
# Create a class named Equilateral that inherits from Triangle.
# Inside Equilateral, create a member variable named angle and set it equal to 60.
# Create an __init__() function with only the parameter self, and set self.angle1, self.angle2, and self.angle3 equal to self.angle (since an equilateral triangle's angles will always be 60˚).

class Triangle(object):
    number_of_sides = 3
    def __init__(self, angle1, angle2, angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
    def check_angles(self):
        if self.angle1 + self.angle2 + self.angle3 == 180:
            return True
        else:
            return False
            
class Equilateral(Triangle):
    angle = 60
    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        
my_triangle = Triangle(90,30,60)
print my_triangle.number_of_sides
print my_triangle.check_angles()