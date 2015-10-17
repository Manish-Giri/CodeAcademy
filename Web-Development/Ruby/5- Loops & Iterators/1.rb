# The 'While' Loop
# Sometimes you want to repeat an action in Ruby while a certain condition is true, but you don't know how many times you'll have to repeat that action. A good example would be prompting a user for a certain type of input: if they insist on giving you the wrong thing, you may have to re-ask them several times before you get the kind of input you're looking for.

# To accomplish this, we use something called a while loop. It checks to see if a certain condition is true, and while it is, the loop keeps running. As soon as the condition stops being true, the loop stops!

# Instructions
# Check out the code in the editor. Can you guess what it'll do? When you think you know, hit Save & Submit Code to see the results.

counter = 1
while counter < 11
  puts counter
  counter = counter + 1
end	