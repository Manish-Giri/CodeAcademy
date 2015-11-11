# Iterating over a list in a function
# Now that we've learned about range, we have two ways of iterating through a list.

# Method 1 - for item in list:

# for item in list:
#     print item
# Method 2 - iterate through indexes:

# for i in range(len(list)):
#     print list[i]
# Method 1 is useful to loop through the list, but it's not possible to modify the list this way. 
# Method 2 uses indexes to loop through the list, making it possible to also modify the list if needed. Since we aren't modifying the list, feel free to use either one on this lesson!

n = [3, 5, 7]

def total(numbers):
    result = 0
    for i in range(len(numbers)):
        result += numbers[i]
    return result