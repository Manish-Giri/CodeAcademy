# The 'Until' Loop
# The complement to the while loop is the until loop. It's sort of like a backwards while:

# i = 0
# until i == 6
#   i += 1
# end
# puts i
# In the example above, we first create a variable i and set it to zero.
# Then we execute a block of code until i is equal to 6. That block of code increments i.
# When i is equal to 6, the block ends.
# Finally, we print 6, the value of i, to the console.
# Instructions
# On line 2, fill in the __ blank so that the loop breaks when counter is greater than 10.
# On line 5, increment counter like we do in the example above.

counter = 1
until counter > 10
  puts counter
  # Add code to update 'counter' here!
  counter += 1
end