# (Re)Introduction to Iteration
# Remember when we covered loops and iterators? We could use a whole bunch of different methods for looping in a program. When we loop over an array or a hash, we say that we iterate over it.

# We'll be using the .each iterator to iterate over arrays and hashes in this section. Take a look at the code in the editor to see one example of how we might go about this.

# Instructions
# When you think you understand the code in the editor, click Save & Submit Code to see it in action.

friends = ["Milhouse", "Ralph", "Nelson", "Otto"]

family = { "Homer" => "dad",
  "Marge" => "mom",
  "Lisa" => "sister",
  "Maggie" => "sister",
  "Abe" => "grandpa",
  "Santa's Little Helper" => "dog"
}

friends.each { |x| puts "#{x}" }
family.each { |x, y| puts "#{x}: #{y}" }



# Milhouse
# Ralph
# Nelson
# Otto
# Homer: dad
# Marge: mom
# Lisa: sister
# Maggie: sister
# Abe: grandpa
# Santa's Little Helper: dog
# {"Homer"=>"dad", "Marge"=>"mom", "Lisa"=>"sister", "Maggie"=>"sister", "Abe"=>"grandpa", "Santa's Little Helper"=>"dog"}