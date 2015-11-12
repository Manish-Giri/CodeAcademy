# Using a list of lists in a function
# Finally, this exercise shows how to make use of a single list that contains multiple lists and how to use them in a function.

# list_of_lists = [[1,2,3], [4,5,6]]

# for lst in list_of_lists:
#     for item in lst:
#         print item
# In the example above, we first create a list containing two items, each of which is a list of numbers.
# Then, we iterate through our outer list.
# For each of the two inner lists (as lst), we iterate through the numbers (as item) and print them out.
# We end up printing out:

# 1
# 2
# 3
# 4
# 5
# 6

n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
# Add your function here

def flatten(lists):
    results = []
    for numbers in lists:
        for number in numbers:
            results.append(number)
            
    return results


print flatten(n)