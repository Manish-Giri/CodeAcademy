# Classier Classes
# We'd like our classes to do more than... well, nothing, so we'll have to replace our pass with something else.

# You may have noticed in our example back in the first exercise that we started our class definition off with an odd-looking function: __init__(). This function is required for classes, and it's used to initialize the objects it creates. __init__() always takes at least one argument, self, that refers to the object being created. You can think of __init__() as the function that "boots up" each object the class creates.

# Instructions
# Remove the pass statement in your class definition, then go ahead and define an __init__() function for your Animal class. Pass it the argument self for now; we'll explain how this works in greater detail in the next section. Finally, put the pass into the body of the __init__() definition, since it will expect an indented block.

class Animal(object):
    def __init__(self):
        pass