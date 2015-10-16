# Unless
# Sometimes you want to use control flow to check if something is false, rather than if it's true. You could reverse your if/else, but Ruby will do you one better: it will let you use an unless statement.

# Let's say you don't want to eat unless you're hungry. That is, while you're not hungry, you write programs, but if you are hungry, you eat. You might write that program in Ruby like this:

# unless hungry
#   # Write some sweet programs
# else
#   # Have some noms
# end
# Instructions
# We've started you off in the editor. Replace the ___s with the correct unless statement code so your program prints out "I'm writing Ruby programs!"

hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end


# I'm writing Ruby programs!
# nil