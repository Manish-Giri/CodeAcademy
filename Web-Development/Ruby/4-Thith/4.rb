# Setting Up the 'If' Branch, Part 1
# All right! Time to add in a little control flow.

# For the if half of our branch, we want to check whether the user's input contains an "s".

# if string_to_check.include? "substring"
# We can do that using Ruby's .include? method, which evaluates to true if it finds what it's looking for and false otherwise.

# (As a general rule, Ruby methods that end with ? evaluate to the boolean values true or false.)

# Instructions
# We want to check user_input for the substring "s".

# Write an if statement in the editor. It should check to see if user_input includes "s".
# For now, print a string of your choice to the console if it finds "s".

print "String please"
user_input = gets.chomp
user_input.downcase!

if user_input.include?"s"
    print "It includes s"
end