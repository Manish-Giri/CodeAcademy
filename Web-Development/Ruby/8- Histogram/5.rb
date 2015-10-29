# Iterating Over the Array
# Perfect! Next up: we want to iterate over words to add each word to our frequencies hash, one at a time.

# colors = {"red" => 2, "blue" => 3}
# colors["blue"] += 1
# puts colors["blue"]
# In the above example, we first create a hash mapping strings to integers.
# Then, we increment the value stored by "blue" by 1.
# Finally, we print out 4, the value stored by "blue".
# Instructions
# Use .each to iterate over the words array.
# For each word we find, assume that the word itself is a key in frequencies and increment its value by 1.
# This is why our default is 0. The first time we find the word, it will have a default value of 0 that we can increment up to 1.

puts "Enter text"
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)

words.each { |word|  frequencies[word] += 1 }