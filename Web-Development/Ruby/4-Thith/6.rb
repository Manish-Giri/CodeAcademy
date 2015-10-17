# Setting Up the 'Else' Branch
# The hard part's over! Now we just need to let the user know if we don't find any instances of the letter "s".

# Instructions
# Add an else statement that displays a string to the user to let them know if there are no "s"s in their string.

print "String please"
user_input = gets.chomp
user_input.downcase!

if user_input.include?"s"
    user_input.gsub!(/s/, "th")
else 
    puts "There's no s in your string"
end