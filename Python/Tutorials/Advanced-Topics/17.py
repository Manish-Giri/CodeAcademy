# List Slicing
# Great! Next up: list slicing.

# str = "ABCDEFGHIJ"
# start, end, stride = 1, 6, 2
# str[start:end:stride]
# You can think of a Python string as a list of characters.

# Instructions
# The string in the editor is garbled in two ways:

# First, our message is backwards;
# Second, the letter we want is every other letter.
# Use list slicing to extract the message and save it to a variable called message.

garbled = "!XeXgXaXsXsXeXmX XtXeXrXcXeXsX XeXhXtX XmXaX XI"

temp = garbled[::-1]

message = temp[::2]

