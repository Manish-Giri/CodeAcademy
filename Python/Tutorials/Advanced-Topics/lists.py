# -*- coding: utf-8 -*-

# Building Lists Let's say you wanted to build a list of the numbers from 0 to
# 50 (inclusive). We could do this pretty easily:

# my_list = range(51) But what if we wanted to generate a list according to some
# logic—for example, a list of all the even numbers from 0 to 50?

# Python's answer to this is the list comprehension. List comprehensions are a
# powerful way to generate lists using the for/in and if keywords we've learned.

# Instructions Check out the list comprehension example in the editor. When
# you're pretty sure you know what it'll do, click Save & Submit Code to see it
# in action.

evens_to_50 = [i for i in range(51) if i % 2 == 0]

print evens_to_50

# List Comprehension Syntax Here's a simple example of list comprehension syntax:

# new_list = [x for x in range(1,6)] # => [1, 2, 3, 4, 5] This will create a
# new_list populated by the numbers one to five. If you want those numbers
# doubled, you could use:

# doubles = [x*2 for x in range(1,6)] # => [2, 4, 6, 8, 10] And if you only wanted
# the doubled numbers that are evenly divisible by three:

# doubles_by_3 = [x*2 for x in range(1,6) if (x*2)%3 == 0] # => [6] Instructions
# Use a list comprehension to build a list called even_squares in the editor. Your
# even_squares list should include the squares of the even numbers between 1 to
# 11. Your list should start [4, 16, 36...] and go from there.

# Complete the following line. Use the line above for help.
even_squares = [x ** 2 for x in range(1,11) if x % 2 == 0 ]

print even_squares


# Now You Try! Great work! Now it's time for you to create a list comprehension
# all on your own.

# c = ['C' for x in range(5) if x < 3] print c The example above creates and
# prints out a list containing ['C', 'C', 'C'].

# Instructions Use a list comprehension to create a list, cubes_by_four. The
# comprehension should consist of the cubes of the numbers 1 through 10 only if
# the cube is evenly divisible by four. Finally, print that list to the console.
# Note that in this case, the cubed number should be evenly divisible by 4, not
# the original number.

cubes_by_four = [x**3 for x in range(1, 11) if (x**3) % 4 == 0]
print cubes_by_four

l = [i ** 2 for i in range(1, 11)]
# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

print l[2:9:2]

# Omitting Indices
# If you don't pass a particular index to the list slice, Python will pick a default.

# to_five = ['A', 'B', 'C', 'D', 'E']

# print to_five[3:]
# # prints ['D', 'E'] 

# print to_five[:2]
# # prints ['A', 'B']

# print to_five[::2]
# # print ['A', 'C', 'E']
# The default starting index is 0.
# The default ending index is the end of the list.
# The default stride is 1.
# Instructions
# Use list slicing to print out every odd element of my_list from start to finish.
# Omit the start and end index. You only need to specify a stride.
# Check the Hint if you need help.

my_list = range(1, 11) # List of numbers 1 - 10

# Add your code below!
print my_list[::2]

# Reversing a List We have seen that a positive stride progresses through the list
# from left to right.

# A negative stride progresses through the list from right to left.

# letters = ['A', 'B', 'C', 'D', 'E'] print letters[::-1] In the example above, we
# print out ['E', 'D', 'C', 'B', 'A'].

# Instructions Create a variable called backwards and set it equal to the reversed
# version of my_list. Make sure to reverse the list in the editor by passing your
# list slice a negative stride, like in the example above.
my_list = range(1, 11)

# Add your code below!
backwards = my_list[::-1]
