# Iterators for Dictionaries
# Let's start with iterating over a dictionary. 
# Recall that a dictionary is just a collection of keys and values.

d = {
    "Name": "Guido",
    "Age": 56,
    "BDFL": True
}
print d.items()

# => [('BDFL', True), ('Age', 56), ('Name', 'Guido')]

# Note that the items() function doesn't return key/value pairs in any specific order. 
# (For more on this, see the Hint.)

my_dict = {
    "Name": "Chelsea",
    "League" : "England",
    "Manager" : "Jose Mourinho"
    }
    
# print my_dict.items()

# keys() and values() Whereas items() returns an array of tuples with each tuple
# consisting of a key/value pair from the dictionary:

# The keys() function returns an array of the dictionary's keys, and The values()
# function returns an array of the dictionary's values. Again, these functions
# will not return the keys or values from the dictionary in any specific order.

# You can think of a tuple as an immutable (that is, unchangeable) list (though
# this is an oversimplification); tuples are surrounded by ()s and can contain any
# data type. Instructions Remove your call to items() and replace it with a call
# to keys() and a call to values(), each on its own line. Make sure to print both!

print my_dict.keys()
print my_dict.values()

# The 'in' Operator For iterating over lists, tuples, dictionaries, and strings,
# Python also includes a special keyword: in. You can use in very intuitively,
# like so:

# for number in range(5):     print number,

# d = { "name": "Eric", "age": 26 } for key in d:     print key, d[key],

# for letter in "Eric":     print letter,  # note the comma! In the example above,
# first we create and iterate through a range, printing out 0 1 2 3 4. Note that
# the trailing comma ensures that we keep printing on the same line. Next, we
# create a dictionary and iterate through, printing out age 26 name Eric.
# Dictionaries have no specific order. Finally, we iterate through the letters of
# a string, printing out E r i c. Instructions For each key in my_dict: print out
# the key , then a space, then the value stored by that key.

# (You should use print a, b rather than print a + " " + b.)

for key in my_dict:
    print key, my_dict[key] 

    
