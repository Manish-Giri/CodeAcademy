# Why Use Classes?
# Python is an object-oriented programming language, which means it manipulates programming constructs called objects. You can think of an object as a single data structure that contains data as well as functions; functions of objects are called methods. For example, any time you call

# len("Eric")
# Python is checking to see whether the string object you passed it has a length, and if it does, it returns the value associated with that attribute. When you call

# my_dict.items()
# Python checks to see if my_dict has an items() method (which all dictionaries have) and executes that method if it finds it.

# But what makes "Eric" a string and my_dict a dictionary? The fact that they're instances of the str and dict classes, respectively. A class is just a way of organizing and producing objects with similar attributes and methods.

# Instructions
# Check out the code in the editor to the right. We've defined our own class, Fruit, and created a lemon instance.

# When you're ready, click Save & Submit Code to get started creating classes and objects of your own.

class Fruit(object):
    """A class that makes various tasty fruits."""
    def __init__(self, name, color, flavor, poisonous):
        self.name = name
        self.color = color
        self.flavor = flavor
        self.poisonous = poisonous

    def description(self):
        print "I'm a %s %s and I taste %s." % (self.color, self.name, self.flavor)

    def is_edible(self):
        if not self.poisonous:
            print "Yep! I'm edible."
        else:
            print "Don't eat me! I am super poisonous."

lemon = Fruit("lemon", "yellow", "sour", False)

lemon.description()
lemon.is_edible()