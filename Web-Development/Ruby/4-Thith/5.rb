# Setting Up the 'If' Branch, Part 2
# Good! Now let's complete our if statement.

# When we find "s", we want Ruby to replace every instance of "s" it finds with "th". We can do this with the .gsub! method, which stands for global substitution.

# The syntax looks like this:

# string_to_change.gsub!(/s/, "th")
# When we get to later lessons, we'll explain why the /s/ has to be between slashes instead of between quotes. Note: you cannot put a space between gsub! and the bit in parentheses.

# Remember, you want the ! at the end of the method name so that Ruby will change the string in-place.

# Instructions
# Remove the print statement you added to your if statement and replace it with a call to .gsub! on user_input. Have it replace /s/ with "th".

print "String please"
user_input = gets.chomp
user_input.downcase!

if user_input.include?"s"
    user_input.gsub!(/s/, "th")
end