# List manipulation in functions
# You can also append or delete items of a list inside a function just as if you were manipulating the list outside a function.

# my_list = [1, 2, 3]
# my_list.append(4)
# print my_list
# # prints [1, 2, 3, 4]

n = [3, 5, 7]
# Add your function here
def list_extender(lst):
    lst.append(9)
    return lst


print list_extender(n)