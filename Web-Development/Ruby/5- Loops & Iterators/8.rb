# The Loop Method
# So far we've learned one way to repeat an action in Ruby: using loops. As is often the case in Ruby, however, there's more than one way to accomplish a given task. In this case, it's also possible to repeat an action using an iterator.

# An iterator is just a Ruby method that repeatedly invokes a block of code. The code block is just the bit that contains the instructions to be repeated, and those instructions can be just about anything you like!

# The simplest iterator is the loop method. You can create a basic (but infinite!) loop by simply typing

# loop { print "Hello, world!" }
# In Ruby, curly braces ({}) are generally interchangeable with the keywords do (to open the block) and end (to close it). Knowing this, we can write a smarter loop than the one above:

# i = 0
# loop do
#   i += 1
#   print "#{i}"
#   break if i > 5
# end
# The break keyword is our Get Out of Jail Free card: it breaks a loop as soon as its condition is met.

# Instructions
# Replace the ___s in the editor with the appropriate keywords. Check the Hint if you need help!

i = 20
loop do
  i -= 1
  print "#{i}"
  break if i <= 0
end