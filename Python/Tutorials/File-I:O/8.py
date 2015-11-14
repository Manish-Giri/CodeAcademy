# Try It Yourself
# It worked! Our Python program successfully wrote to text.txt.

# Instructions
# Now you try: write any data you like to the text.txt file using with...as. Give your file object the usual name: my_file.


with open("text.txt", "r+") as my_file:
    my_file.write("Hi Python")