# Let's Not Get Too Selfish
# Excellent! Let's make one more tweak to our class definition, then go ahead and instantiate (create) our first object.

# So far, __init__() only takes one parameter: self. This is a Python convention; there's nothing magic about the word self. However, it's overwhelmingly common to use self as the first parameter in __init__(), so you should do this so that other people will understand your code.

# The part that is magic is the fact that self is the first parameter passed to __init__(). Python will use the first parameter that __init__() receives to refer to the object being created; this is why it's often called self, since this parameter gives the object being created its identity.

# Instructions
# Let's do two things in the editor:

# Pass __init__() a second parameter, name.
# In the body of __init__(), let the function know that name refers to the created object's name by typing self.name = name. (This will become crystal clear in the next section.)

class Animal(object):
    def __init__(self, name):
        self.name = name