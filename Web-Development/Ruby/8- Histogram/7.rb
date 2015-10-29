# Iterating Over the Hash
# Almost there! Finally, we'll need to iterate over the array to print out each key-value pair to the console.

# fruit = {
#   "apple" => 2,
#   "banana" => 3,
#   "cherry" => 5
# }

# fruit.each do |name, count|
#   puts name + " " + count.to_s
# end
# In the example above, we create a hash called fruit that maps names of fruit to the amount that we own.
# Then, we iterate over .each key/value pair, storing the key as name and the value as count.
# Finally, we print out the key and value separated by a space. Note that we must first convert the value from a number to a string using .to_s before we can concatenate it.
# Instructions
# Iterate over .each key/value pair in the frequencies hash.
# Then, puts each word, a single space, and its frequency to the console, like in the example above.

puts "Enter text"
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)

words.each { |word|  frequencies[word] += 1 }

frequencies = frequencies.sort_by { |word, count| count}
frequencies.reverse!

frequencies.each { |word, count| puts word + " " + count.to_s}


# Enter text
#  hello hi hi hi how
# hi 3
# how 1
# hello 1
# [["hi", 3], ["how", 1], ["hello", 1]]