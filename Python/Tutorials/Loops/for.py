# For your hobbies
# This kind of loop is useful when you want to do something a certain number of times, such as append something to the end of a list.

# Instructions
# Create a for loop that prompts the user for a hobby 3 times, then appends each one to hobbies.

hobbies = []

# Add your code below!
for i in range(3):
    hobby = raw_input("Enter hobby:")
    hobbies.append(hobby)
print hobbies

# For your strings
# Using a for loop, you can print out each individual character in a string.

# The example in the editor is almost plain English: "for each character c in thing, print c".

# Instructions
# Add a second for loop so that each character in word is printed one at a time.
thing = "spam!"

for c in thing:
    print c

word = "eggs!"

# Your code here!
for c in word:
    print c

# For your A
# String manipulation is useful in for loops if you want to modify some content in a string.

# word = "Marble"
# for char in word:
#     print char,
# The example above iterates through each character in word and, in the end, prints out M a r b l e.

# The , character after our print statement means that our next print statement keeps printing on the same line.    
phrase = "A bird in the hand..."

# Add your for loop
for char in phrase:
    if char == 'A' or char == 'a':
        print 'X',
    else:
        print char, 

#Don't delete this print statement!
print

# For your lists
# Perhaps the most useful (and most common) use of for loops is to go through a list.

# On each iteration, the variable num will be the next value in the list. 
# So, the first time through, it will be 7, the second time it will be 9, 
# then 12, 54, 99, and then the loop will exit when there are no more values in the list.
# Write a second for loop that goes through the numbers list
#  and prints each element squared, each on its own line.

numbers  = [7, 9, 12, 54, 99]

print "This list contains: "

for num in numbers:
    print num

# Add your loop below!
for num in numbers:
    print num ** 2

