# count
# Great work so far. Let's finish up by practicing with a few functions that take lists as arguments.

# Instructions
# Define a function called count that has two arguments called sequence and item.
# Return the number of times the item occurs in the list.
# For example: count([1,2,1,1], 1) should return 3 (because 1 appears 3 times in the list).

# There is a list method in Python that you can use for this, but you should do it the long way for practice.
# Your function should return an integer.
# The item you input may be an integer, string, float, or even another list!
# Be careful not to use list as a variable name in your code.it's a reserved word in Python

def count(sequence, item):
	count = 0
	for i in sequence:
		if item == i:
			count += 1
	return count

print count([1,2,1,1], 1)
