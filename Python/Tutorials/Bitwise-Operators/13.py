# ust Flip Out
# Using the XOR (^) operator is very useful for flipping bits. Using ^ on a bit with the number one will return a result where that bit is flipped.

# For example, let's say I want to flip all of the bits in a. I might do this:

# a = 0b110 # 6
# mask = 0b111 # 7
# desired =  a ^ mask # 0b1
# Instructions
# In the editor is the 8 bit variable a. Use a bitmask and the value a in order to achieve a result where all of the bits in a are flipped. Be sure to print your answer as a bin() string!

a = 0b11101110
mask = 0b11111111
desired = a^mask
print bin(desired)