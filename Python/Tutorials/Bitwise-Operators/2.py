# Lesson I0: The Base 2 Number System
# When we count, we usually do it in base 10. That means that each place in a number can hold one of ten values, 0-9. In binary we count in base two, where each place can hold one of two values: 0 or 1. The counting pattern is the same as in base 10 except when you carry over to a new column, you have to carry over every time a place goes higher than one (as opposed to higher than 9 in base 10).

# For example, the numbers one and zero are the same in base 10 and base 2. But in base 2, once you get to the number 2 you have to carry over the one, resulting in the representation "10". Adding one again results in "11" (3) and adding one again results in "100" (4).

# Contrary to counting in base 10, where each decimal place represents a power of 10, each place in a binary number represents a power of two (or a bit). The rightmost bit is the 1's bit (two to the zero power), the next bit is the 2's bit (two to the first), then 4, 8, 16, 32, and so on.

# The binary number '1010' is 10 in base 2 because the 8's bit and the 2's bit are "on":

# 8's bit  4's bit  2's bit  1's bit
    # 1       0       1      0 
    # 8   +   0    +  2   +  0  = 10 
# In Python, you can write numbers in binary format by starting the number with 0b. When doing so, the numbers can be operated on like any other number!

# Instructions
# Take a look at the examples in the editor. Really try to understand this pattern before moving on. Click Save & Submit Code when you're ready to continue.

print 0b1,    #1
print 0b10,   #2
print 0b11,   #3
print 0b100,  #4
print 0b101,  #5
print 0b110,  #6
print 0b111   #7
print "******"
print 0b1 + 0b11
print 0b11 * 0b11

# output
# 1 2 3 4 5 6 7
# ******
# 4
# 9
# None