# Lambda Expressions Last but not least, let's look over some lambdas.

# my_list = range(16) filter(lambda x: x % 3 == 0, my_list) We've given you
# another (slightly different) garbled. Sort it out with a filter() and a lambda.

# Instructions Create a new variable called message. Set it to the result of
# calling filter() with the appropriate lambda that will filter out the "X"s. The
# second argument will be garbled. Finally, print your message to the console.

garbled = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"

message = filter(lambda x: x != "X", garbled)
print message