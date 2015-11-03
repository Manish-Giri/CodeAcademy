# Looping over a dictionary
# You may be wondering how looping over a dictionary would work. 
# Would you get the key or the value?

# The short answer is: you get the key which you can use to get the value.

# d = {'x': 9, 'y': 10, 'z': 20}
# for key in d:
#     if d[key] == 10
#         print "This dictionary has the value 10!"
# First, we create a dictionary with strings as the keys and numbers as the values.
# Then, we iterate through the dictionary, each time storing the key in key.
# Next, we check if that key's value is equal to 10.
# Finally, we print This dictionary has the value 10!
# Instructions
# On line 5, print the key, followed by a space, followed by the value associated with that key.

d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}

for key in d:
    # Your code here!
    print key, d[key]
    