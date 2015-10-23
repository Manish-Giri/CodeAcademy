# Introduction to Hashes
# We know that arrays are indexed with numbers that start with 0 and go up to the array's length minus one. (Think about it: an array with four elements has the indices 0, 1, 2, and 3.)

# But what if we want to use numeric indices that don't go in order from 0 to the end of the array? What if we don't want to use numbers as indices at all? We'll need a new array structure called a hash.

# Hashes are sort of like JavaScript objects or Python dictionaries. If you haven't studied those languages, all you need to know that a hash is a collection of key-value pairs. Hash syntax looks like this:

# hash = {
#   key1 => value1,
#   key2 => value2,
#   key3 => value3
# }
# Values are assigned to keys using =>. You can use any Ruby object for a key or value.

# Instructions
# We've created a hash in the editor to the right. See how it's made up of keys and values? Check out the code below it: it should look vaguely familiar. Click Save & Submit Code to see what it'll do!

my_hash = { "name" => "Eric",
  "age" => 26,
  "hungry?" => true
}

puts my_hash["name"]
puts my_hash["age"]
puts my_hash["hungry?"]