# Danger: Infinite Loops!
# Did you see that? The loop printed out the numbers 1 to 10, then stopped. This was because the loop's condition said to continue while counter was less than 11; since counter went up by 1 each time through the loop, the loop stopped when counter hit 11.

# What if we'd forgotten to increment counter? It would have stayed at 1, the loop would have kept checking to see if it was less than 11 (and 1 is always less than 11), and the loop would never have ended. This is called an infinite loop and it will cause your programs to crash. Avoid them at all costs!

# Instructions
# The while loop in the editor is currently an infinite loop. Correct it so it will end! (Be careful—if you click Save & Submit Code right away, you'll start the infinite loop and you'll have to refresh the page.)

i = 0
while i < 5
  puts i
  i +=1 
  # Add your code here!
  
end