choice = raw_input('Enjoying the course? (y/n)')

while choice != 'y' and choice != 'n':  # Fill in the condition (before the colon)
    choice = raw_input("Sorry, I didn't catch that. Enter again: ")

count = 0

while True:
    print count
    count += 1
    if count >= 10:
        break