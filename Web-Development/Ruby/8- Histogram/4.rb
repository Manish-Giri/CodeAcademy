# Creating the Frequencies Hash
# Good! Now we'll start counting words using a hash.

# We'll want to make sure the hash has a default value.

# h = Hash.new("nothing here")

# puts h
# # {}

# puts h["kitty"]
# # nothing here
# In the example above, we create a new, empty hash h that has a default value of "nothing here".
# Then we print out {}, the value of h, just to show that h really is empty.
# Then we print out nothing here as we try to access the value stored by the key "kitty".
# If you have a hash with a default value, and you try to access a non-existent key, you get that default value.

# Instructions
# Create a hash called frequencies in the editor.
# Give it a default value of 0.

puts "Enter text"
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)