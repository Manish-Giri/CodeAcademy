# Modifying each element in a list in a function
# This exercise shows how to modify each element in a list. It is useful to do so in a function as you can easily put in a list of any length and get the same functionality. 
# As you can see, len(n) is the length of the list.

n = [3, 5, 7]

for i in range(0, len(n)):
    n[i] = n[i] * 2
# Don't forget to return your new list!

def double_list(x):
    for i in range(len(x)):
        x[i] *= 2
    return x
print double_list(n)