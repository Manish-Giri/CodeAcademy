# Reading Between the Lines
# What if we want to read from a file line by line, rather than pulling the entire file in at once. Thankfully, Python includes a readline() function that does exactly that.

# If you open a file and call .readline() on the file object, you'll get the first line of the file; subsequent calls to .readline() will return successive lines.

# Instructions
# Declare a new variable my_file and store the result of calling open() on the "text.txt" file in "r"ead-only mode.
# On three separate lines, print out the result of calling my_file.readline(). See how it gets the next line each time?
# Don't forget to close() your file when you're done with it!)


my_file = open("text.txt", "r")

print my_file.readline()
print my_file.readline()
print my_file.readline()

my_file.close()

