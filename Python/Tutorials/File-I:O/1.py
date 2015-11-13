# See It to Believe It
# Until now, the Python code you've been writing comes from one source and only goes to one place: you type it in at the keyboard and its results are displayed in the console. But what if you want to read information from a file on your computer, and/or write that information to another file?

# This process is called file I/O (the "I/O" stands for "input/output"), and Python has a number of built-in functions that handle this for you.

# Check out the code in the editor to the right. Note that you now have an extra output.txt tab, which is just an empty text file. That's all about to change!

# Instructions
# Click Save & Submit Code, then check out the output.txt tab to see Python's file I/O powers in action.

my_list = [i**2 for i in range(1,11)]
# Generates a list of squares of the numbers 1 - 10

f = open("output.txt", "w")

for item in my_list:
    f.write(str(item) + "\n")

f.close()


1
4
9
16
25
36
49
64
81
100
