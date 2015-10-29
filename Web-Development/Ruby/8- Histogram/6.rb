# Sorting the Hash
# Great! We have a hash full of word / frequency key-value pairs. Now we need to figure out a way to get our information in the order we want it.

# colors = {"blue" => 3, "green" => 1, "red" => 2}
# colors = colors.sort_by do |color, count|
#   count
# end
# colors.reverse!
# In the example above, we first create a hash called colors that maps color strings to numbers.
# Then, we sort colors into green, red, and blue, from smallest to largest by count. Just so you know, the .sort_by function returns an array of arrays, but that's fine for our purposes.
# Finally, we reverse the array order so that the colors with the largest counts are first.
# Can you do the same thing with the frequencies hash?

# Instructions
# Use .sort_by to sort the frequencies hash by word count, like step 2 above. Store the result back in frequencies.
# Use .reverse! to reverse the sorted frequencies array.
# Check the Hint for more details!

puts "Enter text"
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)

words.each { |word|  frequencies[word] += 1 }

frequencies = frequencies.sort_by { |word, count| count}
frequencies.reverse!


# Enter text
#  hello hi hi me
# [["hi", 2], ["me", 1], ["hello", 1]]