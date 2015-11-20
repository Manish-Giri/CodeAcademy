# Lambda Syntax Lambda functions are defined using the following syntax:

# my_list = range(16) filter(lambda x: x % 3 == 0, my_list) Lambdas are useful
# when you need a quick function to do some work for you.

# If you plan on creating a function you'll use over and over, you're better off
# using def and giving that function a name.

# Instructions Fill in the first part of the filter function with a lambda. The
# lambda should ensure that only "Python" is returned by the filter. Fill in the
# second part of the filter function with languages, the list to filter.

languages = ["HTML", "JavaScript", "Python", "Ruby"]
print filter(lambda x: x == "Python", languages)