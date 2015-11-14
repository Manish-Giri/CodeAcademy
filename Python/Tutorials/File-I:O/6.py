# PSA: Buffering Data
# We keep telling you that you always need to close your files after you're done writing to them. Here's why!

# During the I/O process, data is buffered: this means that it is held in a temporary location before being written to the file.

# Python doesn't flush the buffer—that is, write data to the file—until it's sure you're done writing. One way to do this is to close the file. If you write to a file without closing, the data won't make it to the target file.

# Instructions
# Check out our extremely bad code in the editor. Click Save & Submit Code—you'll note that our read_file.read() didn't read any data back! (The text still appears in text.txt, though, because we closed the file behind the scenes for you. Safety first!)

# Add a write_file.close() call on line 9.
# Add a read_file.close() on line 13.
# Run the code again.
# This time, you'll see the data come through!

# Open the file for reading
read_file = open("text.txt", "r")

# Use a second file handler to open the file for writing
write_file = open("text.txt", "w")
# Write to the file
write_file.write("Not closing files is VERY BAD.")

write_file.close()

# Try to read from the file
print read_file.read()
read_file.close()

