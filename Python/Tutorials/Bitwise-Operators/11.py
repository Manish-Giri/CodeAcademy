# The Man Behind the Bit Mask
# A bit mask is just a variable that aids you with bitwise operations. A bit mask can help you turn specific bits on, turn others off, or just collect data from an integer about which bits are on or off.

# num  = 0b1100
# mask = 0b0100
# desired = num & mask
# if desired > 0:
    # print "Bit was on"
# In the example above, we want to see if the third bit from the right is on.

# First, we first create a variable num containing the number 12, or 0b1100.
# Next, we create a mask with the third bit on.
# Then, we use a bitwise-and operation to see if the third bit from the right of num is on.
# If desired is greater than zero, then the third bit of num must have been one.
# Instructions
# Define a function, check_bit4, with one argument, input, an integer.
# It should check to see if the fourth bit from the right is on.
# If the bit is on, return "on" (not print!)
# If the bit is off, return "off".
# Check the Hint for some examples!

def check_bit4(input):
    mask = 0b1000
    if input & mask > 0:
        return "on"
    else:
        return "off"