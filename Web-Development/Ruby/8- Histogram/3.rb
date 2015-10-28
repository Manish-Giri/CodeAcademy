# Building the Words Array
# Next, we'll want to turn the user's string into something we can iterate over. A data structure made up of elements all in a line, you say? That sounds like an array!

# By calling the .split method on text, we can transform it into an array.

# Instructions
# Declare a variable called words and set it equal to the result of calling .split on text.

puts "Enter text"
text = gets.chomp

words = text.split(" ")