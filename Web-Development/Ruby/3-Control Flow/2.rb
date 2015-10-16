# If
# Ruby's if statement takes an expression, which is just a fancy word for something that has a value (like 4, true, or pants). If that expression is true, Ruby executes the block of code that follows the if. If it's not true (that is, false), Ruby doesn't execute that block of code: it skips it and goes on to the next thing.

# Here's an example of an if statement in action:

# if 1 < 2
#   print "I'm getting printed because one is less than two!"
# end
# Ruby doesn't care about whitespace (spaces and blank lines), so the indentation of the print statement isn't necessary. However, it's a convention that Rubyists (Ruby enthusiasts) follow, so it's good to get in the habit now. The block of code following an if should be indented two spaces.

# When you're done with your if, you have to tell Ruby by typing end.

# Instructions
# Write your own if statement in the editor. It can take any expression you want (even just true!), but it should evaluate to true. When it does, it should print a string of your choice to the console (using print or puts).

if 5 > 4
    puts "This will print"
end

# Else
# The partner to the if statement is the else statement. An if/else statement says to Ruby: "If this expression is true, run this code block; otherwise, run the code after the else statement." Here's an example:

# if 1 > 2
#   print "I won't get printed because one is less than two."
# else
#   print "That means I'll get printed!"
# end
# Instructions
# Try it yourself in the editor! Use any expression you like in your if/else statement, but make sure both branches print a string of your choice to the console.

if 5 > 4
    puts "This will print"
else 
    puts "This won't print"
end


# Elsif
# What if you want more than two options, though? It's elsif to the rescue! The elsif statement can add any number of alternatives to an if/else statement, like so:

# if x < y  # Assumes x and y are defined
#   puts "x is less than y!"
# elsif x > y
#   puts "x is greater than y!"
# else
#   puts "x equals y!"
# end
# Instructions
# Add an elsif block to your if/else statement in the editor.

if 5 > 4
    puts "This will print"
elsif 
   puts "Meh" 
else 
    puts "This won't print"
    
end