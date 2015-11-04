# Class basics
# Classes can be very useful for storing complicated objects with their own methods and variables. Defining a class is much like defining a function, but we use the class keyword instead. We also use the word object in parentheses because we want our classes to inherit the object class. This means that our class has all the properties of an object, which is the simplest, most basic class. Later we'll see that classes can inherit other, more complicated classes. An empty class would look like this:

# class ClassName(object):
    # # class statements go here
# Instructions
# Define a new class named "Car". For now, since we have to put something inside the class, use the pass keyword.

# Create an instance of a class
# We can use classes to create new objects, which we say are instances of those classes.

# Creating a new instance of a class is as easy as saying:

# newObject = ClassName()
# Instructions
# Below your Car class, create a new object named my_car that is an instance of Car.

class Car(object):
    pass

# my_car = Car()

# Class member variables
# Classes can have member variables that store information about each class object. We call them member variables since they are information that belongs to the class object.

# Creating member variables and assigning them initial values is as easy as creating any other variable:

# class ClassName(object):
    # memberVariable = "initialValue"
# Instructions
# Inside your Car class, replace the pass statement with a new member variable named condition and give it an initial value of the string "new".


# Calling class member variables
# Each class object we create has its own set of member variables. Since we've created an object my_car that is an instance of the Car class, my_car should already have a member variable named condition. This attribute gets assigned a value as soon as my_car is created.

# Instructions
# At the end of your code, use a print statement to display the condition of my_car.
class Car(object):
    condition = "new"

my_car = Car()
print my_car.condition