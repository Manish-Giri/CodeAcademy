# anti_vowel
# Nice work. Next up: vowels!

# Instructions
# Define a function called anti_vowel that takes one string, text, 
# as input and returns the text with all of the vowels removed.

# For example: anti_vowel("Hey You!") should return "Hy Y!".

# Don't count Y as a vowel.
# Make sure to remove lowercase and uppercase vowels.

def anti_vowel(text):
	text = list(text)
	result = ""
	for c in text:
		if c == 'A' or c == 'a' or c == 'E' or c == 'e' or c == 'I' or c == 'i' or c == 'O' or c == 'o' or c == 'U' or  c == 'u':
			continue
		result += c
	return result

print anti_vowel("Hey You!")