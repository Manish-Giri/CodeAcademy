# How It Works
# You may have noticed that the kinds of programs we've written so far in Ruby aren't very flexible. Sure, they can take user input, but they always produce the same result based on that input; they don't change their behavior in reaction to the environment (the collection of all variables and their values that exist in the program at a given time).

# Control flow gives us the flexibility we're looking for. We can select different outcomes depending on information the user types, the result of a computation, or the value returned by another part of the program.

# Instructions
# Check out the code in the editor. There's some new syntax there, but we'll bet you can guess what it does. Click Save & Submit Code to see the program in action! (Go ahead and give Ruby an integer—that is, a positive or negative number with no decimal bit.)

print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end