# reverse
# Great work so far! Let's practice writing some functions that work with strings.

# Instructions
# Define a function called reverse that takes a string textand returns that string in reverse.

# For example: reverse("abcd") should return "dcba".

# You may not use reversed or [::-1] to help you with this.
# You may get a string containing special characters (for example, !, @, or #).

def reverse(text):
	result = ""
	text = list(text)
	lenth = len(text)
	while lenth > 0:
		result += text[lenth - 1]
		lenth -= 1
	return result


print reverse("abcd")