# -*- coding: utf-8 -*-


# Welcome to Battleship!
# In this project you will build a simplified, one-player version of the classic board game Battleship! 
# In this version of the game, there will be a single ship hidden in a random location on a 5x5 grid. 
# The player will have 10 guesses to try to sink the ship.

# To build this game we will use our knowledge of lists, conditionals and functions in Python. When you're ready to get started, click run to continue.
from random import randint

board = []

# Make a List
# Good! Now we'll use a built-in Python function to generate our board, which we'll make into a 5 x 5 grid of all "O"s, for "ocean."

# print ["O"] * 5
# will print out ['O', 'O', 'O', 'O', 'O'], which is the basis for a row of our board.

# We'll do this five times to make five rows. (Since we have to do this five times, it sounds like a loop might be in order.)

for i in range(5):
    lst = ["O", "O", "O", "O", "O"]
    board.append(lst)


# Check it Twice
# Great job! Now that we've built our board, let's show it off.

# Throughout our game, we'll want to print the game board so that the player can see which locations they have already guessed. 
# Regularly printing the board will also help us debug our program.

# The easiest way to print the board would be to have Python display it for us using the print command. 
# Let's give that a try and see what the results look like is this a useful way to print our board for Battleship. 
# NOTE: - not allowed in python comment, like is?

print board

# Custom Print
# Now we can see the contents of our list, but clearly it would be easier to play the game if we could print the board out like a grid with each row on its own line.

# We can use the fact that our board is a list of lists to help us do this. Let's set up a for loop to go through each of the elements in the outer list (each of which is a row of our board) and print them.

# Instructions
# First, delete your existing print statement.
# Then, define a function named print_board with a single argument, board.
# Inside the function, write a for loop to iterates through each row in board and print it to the screen.
# Call your function with board to make sure it works.

    
def print_board(board):
    for i in range(len(board)):
        #print board[i]
        print " ".join(board[i])

        
print_board(board)

# Printing Pretty
# We're getting pretty close to a playable board, but wouldn't it be nice to get rid of those quote marks and commas? We're storing our data as a list, but the player doesn't need to know that!

# letters = ['a', 'b', 'c', 'd']
# print " ".join(letters)
# print "---".join(letters)
# In the example above, we create a list called letters.
# Then, we print a b c d. The .join method uses the string to combine the items in the list.
# Finally, we print a---b---c---d. We are calling the .join function on the "---" string.
# We want to turn each row into "O O O O O".

# Hide...
# Excellent! Now, let's hide our battleship in a random location on the board.

# Since we have a 2-dimensional list, we'll use two variables to store the ship's location, ship_row and ship_col.

# from random import randint
# coin = randint(0, 1)
# dice = randint(1, 6)
# In the above example, we first import the randint(low, high) function from the random module.
# Then, we generate either zero or one and store it in coin.
# Finally, we generate a number from one to six inclusive.
# Let's generate a random_row and random_col from zero to four!

# Add your code below!
def random_row(board):
    return randint(0, len(board)-1)
    
    
def random_col(board):
    return randint(0, len(board)-1)
    
ship_row = random_row(board)
ship_col = random_col(board)

#print ship_col
print ship_row
print ship_col

# ..and Seek!
# Good job! For now, let's store coordinates for the ship in the variables ship_row and ship_col. Now you have a hidden battleship in your ocean! Let's write the code to allow the player to guess where it is.

# number = raw_input("Enter a number: ")
# if int(number) == 0:
#     print "You entered 0"
# raw_input asks the user for input and returns it as a string. But we're going to want to use integers for our guesses! To do this, we'll wrap the raw_inputs with int() to convert the string to an integer.

# Add your code below!
guess_row = int(raw_input("Guess Row: "))
guess_col = int(raw_input("Guess Col: "))


# It's Not Cheating,It's Debugging!
# Awesome! Now we have a hidden battleship and a guess from our player. In the next few steps, we'll check the user's guess to see if they are correct.

# While we're writing and debugging this part of the program, it will be helpful to know where that battleship is hidden. Let's add a print statement that displays the location of the hidden ship.

# Of course, we'll remove this output when we're finished debugging since if we left it in, our game wouldn't be very challenging. :)

# Instructions
# Print the value of ship_col.
# Print the value of ship_row.

# You win!
# Okay,now for the fun! We have the actual location of the ship and the player's guess so we can check to see if the player guessed right.

# For a guess to be right, guess_col should be equal to ship_col and guess_row should be equal to ship_row.

# if guess_col == 0 and guess_row == 0:
#     print "Top-left corner."
# The example above is just a reminder about if statements.

# Write your code below!

# Danger, Will Robinson!!
# Great! Of course, the player isn't going to guess right all the time, so we also need to handle the case where the guess is wrong.

# print board[2][3]
# The example above prints out "O", the element in the 3rd row and 4th column.
# if ship_row == guess_row and ship_col == guess_col:
#     print "Congratulations! You sank my battleship!"
# else:
#     print "You missed my battleship!"
#     board[guess_row][guess_col] = 'X'
#     print_board(board)

# Bad Aim
# Great job! Now we can handle both correct and incorrect guesses from the user. But now let’s think a little bit more about the "miss" condition.

# They can enter a guess that's off the board.
# They can guess a spot they’ve already guessed.
# They can just miss the ship.
# We'll add these tests inside our else condition. Let's build the first case now!

# if x not in range(8) or \
#    y not in range(3):
#         print "Outside the range"
# The example above checks if either x or y are outside those ranges. The \ character just continues the if statement onto the next line.

# Write your code below!
# if guess_row == ship_row and guess_col == ship_col:
#     print "Congratulations! You sank my battleship!"
# else:
#     if guess_row not in range(5) or guess_col not in range(5):
#         print "Oops, that's not even in the ocean."
#     elif board[guess_row][guess_col] == 'X':
#         print "You guessed that one already."
#     else:
#         print "You missed my battleship!"
#         board[guess_row][guess_col] = 'X'
#         print_board(board)

# Not Again!
# Great! Now let's handle the second type of incorrect guess: the player guesses a location that was already guessed. How will we know that a location was previously guessed?

# print board[guess_row][guess_col]
# The example above will print an 'X' if already guessed or an 'O' otherwise.

# Test Run
# Congratulations! Now you should have a game of Battleship! that is fully functional for one guess.

# Make sure you play it a couple of times and try different kinds of incorrect guesses. This is a great time to stop and do some serious debugging.

# In the next step, we'll move on and look at how to give the user 4 guesses to find the battleship.Play It, Sam
# You can successfully make one guess in Battleship! But we’d like our game to allow the player to make up to 4 guesses before they lose.

# for turn in range(4):
#     # Make a guess
#     # Test that guess
# We can use a for loop to iterate through a range. Each iteration will be a turn.

# Everything from here on should go in your for loop!
# Be sure to indent four spaces!

# A Real Win
# Almost there! We can play Battleship!, but you’ll notice that when you win, if you haven’t already guessed 4 times, the program asks you to enter another guess. What we’d rather have happen is for the program to end—it’s no fun guessing if you know you’ve already sunk the Battleship!

# We can use the command break to get out of a for loop.

# Instructions
# Add a break under the win condition to end the loop after a win.


for turn in range(4):
    print "Turn", turn + 1
    guess_row = int(raw_input("Guess Row:"))
    guess_col = int(raw_input("Guess Col:"))
    if guess_row == ship_row and guess_col == ship_col:
        print "Congratulations! You sunk my battleship!"
        break
    else:
        if (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
            print "Oops, that's not even in the ocean."
        elif(board[guess_row][guess_col] == "X"):
            print "You guessed that one already."
        else:
            print "You missed my battleship!"
            board[guess_row][guess_col] = "X"
            print_board(board)
            # Print (turn + 1) here!
            #print turn+1
            if turn == 3:
            	print "Game Over"
    