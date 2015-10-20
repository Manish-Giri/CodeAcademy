# Try It Out!
# Cool, no? Now it's your turn to take the .each method for a test drive.

# numbers = [1, 2, 3, 4, 5]

# # one way to loop
# numbers.each { |item| puts item }

# # another way to loop
# numbers.each do |item|
#   puts item
# end
# In the example above, we create an array called numbers.
# Then we show two different ways to print each item in numbers to the console.
# Instructions
# Use the .each method on the odds array to print out double the value of each item of the array. In other words, multiply each item by 2.

# Make sure to use print rather than puts, so your output appears on one line.

# Check the Hint if you get stuck!

odds = [1,3,5,7,9]

# Add your code below!

odds.each { |item|
print item * 2
}