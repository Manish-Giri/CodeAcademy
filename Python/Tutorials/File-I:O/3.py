# Writing
# Good work! Now it's time to write some data to our output.txt file.

# We've added the list comprehension from the first exercise to the code in the editor. Our goal in this exercise will be to write each element of that list to output.txt (shown in a new tab above the editor) with each number on its own line.

# We can write to a Python file like so:

# my_file.write("Data to be written")
# The write() function takes a string argument, so we'll need to do a few things here:

# You must close the file. You do this simply by calling my_file.close() (we did this for you in the last exercise). If you don't close your file, Python won't write to it properly. From here on out, you gotta close your files!

# Instructions
# Iterate over my_list to get each value
# Use my_file.write() to write each value to output.txt
# Make sure to call str() on the iterating data so .write() will accept it
# Make sure to add a newline ("\n") after each element to ensure each will appear on its own line.
# Use my_file.close() to close the file when you're done.

my_list = [i**2 for i in range(1,11)]

my_file = open("output.txt", "r+")

# Add your code below!
for item in my_list:
    my_file.write(str(item)+"\n")

my_file.close()