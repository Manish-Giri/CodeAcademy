# Redacted!
# All right! Time to break out our iterators to go through the user's text.

# letters = ['a', 'b', 'c', 'd']
# letters.each do |letter|
#   print letter
# end
# The example above just serves as a reminder of using .each on the letters array.

# Instructions
# Let's start simple: write an .each loop that goes through words and just prints out each word it finds.

puts "Enter text to search through"
text = gets.chomp
puts "Enter word to redact"
redact = gets.chomp

words = text.split(" ")

words.each do |word|
    print word
end

# Enter text to search through
#  helloo world
# Enter word to redact
#  hello
# hellooworld["helloo", "world"]