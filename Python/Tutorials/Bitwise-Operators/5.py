# int()'s Second Parameter
# Python has an int() function that you've seen a bit of already. It can turn non-integer input into an integer, like this:

# int("42")
# # ==> 42
# What you might not know is that the int function actually has an optional second parameter.

# int("110", 2)
# # ==> 6
# When given a string containing a number and the base that number is in, the function will return the value of that number converted to base ten.

# Instructions
# In the console are several different ways that you can use the int function's second parameter.

# On line 7, use int to print the base 10 equivalent of the binary number 11001001.

# ?
# Stuck? Get a hint!
print int("1",2)
print int("10",2)
print int("111",2)
print int("0b100",2)
print int(bin(5),2)
# Print out the decimal equivalent of the binary 11001001.
print int("0b11001001", 2)

# 1
# 2
# 7
# 4
# 5
# 201
# None