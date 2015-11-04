# Slip and Slide
# Finally, you can also use the left shift (<<) and right shift (>>) operators to slide masks into place.

# a = 0b101 
# # Tenth bit mask
# mask = (0b1 << 9)  # One less than ten 
# desired = a ^ mask
# Let's say that I want to turn on the 10th bit from the right of the integer a.

# Instead of writing out the entire number, we slide a bit over using the << operator.

# We use 9 because we only need to slide the mask nine places over from the first bit to reach the tenth bit.

# Instructions
# Define a function called flip_bit that takes the inputs (number, n).
# Flip the nth bit (with the ones bit being the first bit) and store it in result.
# Return the result of calling bin(result).

def flip_bit(number, n):
    mask = 0b1 << n-1
    result = number ^ mask
    return bin(result)