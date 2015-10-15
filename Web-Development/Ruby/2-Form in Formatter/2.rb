# Prompting the User
# First, let's write the code we're already familiar with. In order to get input from the user, we'll first need to print a prompt on the screen.

# Instructions
# print the question "What's your first name?" to the screen. Feel free to peek back at the first exercise if you need a syntax reminder.

# Getting Input
# Good! Now let's try something new. You may have noticed this weird little line of code repeated in our example:

# variable_name = gets.chomp
# gets is the Ruby method that gets input from the user. When getting input, Ruby automatically adds a blank line (or newline) after each bit of input; chomp removes that extra line. (Your program will work fine without chomp, but you'll get extra blank lines everywhere.)

# Instructions
# Declare a variable first_name and set it equal to gets.chomp.


print "What's your first name?"

first_name = gets.chomp