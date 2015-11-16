# The open() Function
# Let's walk through the process of writing to a file one step at a time.

# The first code that you saw executed in the previous exercise was this:

# f = open("output.txt", "w")
# This told Python to open output.txt in "w" mode ("w" stands for "write"). We stored the result of this operation in a file object, f.

# Doing this opens the file in write-mode and prepares Python to send data into the file.

# Instructions
# Create a variable, my_file, and set it equal to calling the open() function on output.txt. In this case, pass "r+" as a second argument to the function so the file will allow you to read and write to it! (See the Hint for details.)
my_file = open("output.txt", "r+")