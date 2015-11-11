# Printing out a list item by item in a function
# This exercise is to go over how to utilize every element in a list in a function. 
# You can use the existing code to complete the exercise and see how running 
# this operation inside a function isn't much different from running this operation outside a function.

# Don't worry about the range function quite yet—we'll explain it later in this section.
n = [3, 5, 7]

def print_list(x):
    for i in range(len(x)):
        print x[i]

print_list(n)