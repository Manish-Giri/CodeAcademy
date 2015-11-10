# def list_function(x):
#     return x[1]

# n = [3, 5, 7]
# print list_function(n)


# Modifying an element of a list in a function
# Modifying an element in a list in a function is the same as if you were just modifying an element of a list outside a function.

def list_function(x):
    x[1] += 3
    return x

n = [3, 5, 7]
print list_function(n)