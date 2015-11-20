# Try It! All right! Time to test out filter() and lambda expressions.

# cubes = [x**3 for x in range(1, 11)] filter(lambda x: x % 3 == 0, cubes) The
# example above is just a reminder of the syntax.

# Instructions Create a list, squares, that consists of the squares of the numbers
# 1 to 10. A list comprehension could be useful here! Use filter() and a lambda
# expression to print out only the squares that are between 30 and 70 (inclusive).

squares = [x**2 for x in range(1, 11)]

print squares

squares = [x**2 for x in range(1, 11)]

print filter(lambda x: x>= 30 and x <= 70, squares)