# Counting as you go
# A weakness of using this for-each style of iteration is that you don't know the index of the thing you're looking at. 
# Generally this isn't an issue, but at times it is useful to know how far into the list you are. 
# Thankfully the built-in enumerate function helps with this.

# enumerate works by supplying a corresponding index to each element in the list that you 
# pass it. Each time you go through the loop, index will be one greater, and item will be the next item 
# in the sequence. It's very similar to using a normal for loop with a list, 
# except this gives us an easy way to count how many items we've seen so far.

choices = ['pizza', 'pasta', 'salad', 'nachos']

print 'Your choices are:'
for index, item in enumerate(choices):
    print index + 1, item