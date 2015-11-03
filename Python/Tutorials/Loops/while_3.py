# Your own while / else
# Now you should be able to make a game similar to the one in the last exercise. The code from the last exercise is below:

# count = 0
# while count < 3:
#     num = random.randint(1, 6)
#     print num
#     if num == 5:
#         print "Sorry, you lose!"
#         break
#     count += 1
# else:
#     print "You win!"
# In this exercise, allow the user to guess what the number is three times.

# guess = int(raw_input("Your guess: "))
# Remember, raw_input turns user input into a string, so we use int() to make it a number again.

# Instructions
# Use a while loop to let the user keep guessing so long as guesses_left is greater than zero.
# Ask the user for their guess, just like the second example above.
# If they guess correctly, print 'You win!' and break.
# Decrement guesses_left by one.
# Use an else: case after your while loop to print You lose..

from random import randint

# Generates a number from 1 through 10 inclusive
random_number = randint(1, 10)

guesses_left = 3
# Start your game!
while guesses_left > 0:
    guess = int(raw_input("Enter our guess:"))
    if guess == random_number:
        print "You win!"
        break
    guesses_left -= 1
else:
    print "You lose."
    
