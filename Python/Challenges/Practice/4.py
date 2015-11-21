# -*- coding: utf-8 -*-

# digit_sum
# Awesome! Now let's try something a little trickier. Try summing the digits of a number.

# Instructions
# Write a function called digit_sum that takes a positive integer n as input and returns the sum of all that number's digits.

# For example: digit_sum(1234) should return 10 which is 1 + 2 + 3 + 4.

# (Assume that the number you are given will always be positive.)

# Check the hint if you need help!

# ?
# Hint
# One way might be to convert the integer to a string with str(), divide it up, and turn the substrings back into integers with int() to do the addition.

# If you're looking for a challenge, try this: to get the rightmost digit of a number, 
# you can modulo (%) the number by 10. To remove the rightmost digit you can floor divide (//) the number by 10. 
# (Don't worry if you're not familiar with floor division—you can look up the documentation here. Remember, this is a challenge!)

# Try working this into a pattern to isolate all of the digits and add them to a total.

# def digit_sum(n):
#     result = 0
#     sums = str(n)
#     for i in sums:
#         result += int(i)
#     return result

def digit_sum(n):
    number = n
    result = 0
    while number > 0:
        remainder = number % 10
        result += remainder
        number = number // 10
    return result    

print digit_sum(1234)