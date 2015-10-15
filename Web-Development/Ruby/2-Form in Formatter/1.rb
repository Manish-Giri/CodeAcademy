# What You'll Be Building
# This project will help you create a small program that will read a user's input and correct his or her capitalization. Users can provide an almost infinite range of input, so it makes our lives easier as programmers to make their input standard before doing anything with it.

# Instructions
# Check out the code in the editor—we've added some new things that we'll be teaching you. Can you guess what it does? Click Save & Submit Code to find out!

# Answer each question, and hit enter (return on some keyboards).

print "What's your first name?"
first_name = gets.chomp
first_name.capitalize!

print "What's your last name?"
last_name = gets.chomp
last_name.capitalize!

print "What city are you from?"
city = gets.chomp
city.capitalize!

print "What state or province are you from?"
state = gets.chomp
state.upcase!

puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"



# What's your first name? manish
# What's your last name? giri
# What city are you from? cinci
# What state or province are you from? OH
# Your name is Manish Giri and you're from Cinci, OH!
# nil