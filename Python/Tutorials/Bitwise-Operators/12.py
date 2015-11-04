# Turn It On
# You can also use masks to turn a bit in a number on using |. For example, let's say I want to make sure the rightmost bit of number a is turned on. I could do this:

# a = 0b110 # 6
# mask = 0b1 # 1
# desired =  a | mask # 0b111, or 7
# Using the bitwise | operator will turn a corresponding bit on if it is off and leave it on if it is already on.

# Instructions
# In the editor is a variable, a. Use a bitmask and the value a in order to achieve a result where the third bit from the right of a is turned on. Be sure to print your answer as a bin() string!

a = 0b10111011
mask = 0b100
desired = a | mask
print bin(desired)