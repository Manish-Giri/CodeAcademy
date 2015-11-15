# Print those grades
# As a refresher, let's start off by writing a function to print out the list of grades, one element at a time.

grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

def print_grades(grades):
    for grade in grades:
        print grade
        
print_grades(grades)

# The sum of scores
# Now that we have a function to print the grades, let's create another function to compute the sum of all of the test grades.

# This will be super-helpful when we need to compute the average score.

# I know what you're thinking, "let's just use the built-in sum() function!" The built-in function would work beautifully, but it would be too easy.

# Computing the sum manually involves computing a rolling sum. As you loop through the list, add the current grade to a variable that keeps track of the total, let's call that variable total.


def grades_sum(scores):
    total = 0
    for grade in scores:
        total += grade
    return total
    
print grades_sum(grades)

# Computing the Average
# The average test grade can be found by dividing the sum of the grades by the total number of grades.

# Luckily, we just created an awesome function, grades_sum() to compute the sum.

# Instructions
# Define a function grades_average(), below the grades_sum() function that does the following:

# Has one argument, grades, a list
# Calls grades_sum with grades
# Computes the average of the grades by dividing that sum by float(len(grades)).
# Returns the average.
# Call the newly created grades_average() function with the list of grades and print the result.


def grades_average(grades):
    sums = grades_sum(grades)
    return sums / float(len(grades))
    
print grades_average(grades)


# The Variance
# Let's see how the grades varied against the average. This is called computing the variance.

# A very large variance means that the students' grades were all over the place, 
# while a small variance (relatively close to the average) means that the majority of students did fairly well.

# Instructions
# On line 18, define a new function called grades_variance() that accepts one argument, scores, a list.
# First, create a variable average and store the result of calling grades_average(scores).
# Next, create another variable variance and set it to zero. We will use this as a rolling sum.
# for each score in scores: Compute its squared difference: (average - score) ** 2 and add that to variance.
# Divide the total variance by the number of scores.
# Then, return that result.
# Finally, after your function code, print grades_variance(grades).

def grades_variance(scores):
    average = grades_average(scores)
    variance = 0
    for score in scores:
        var = (average - score) ** 2
        variance += var
    return variance / len(scores)
    
print grades_variance(grades)

# Standard Deviation
# Great job computing the variance! The last statistic will be much simpler: standard deviation.

# The standard deviation is the square root of the variance. You can calculate the square root by raising the number to the one-half power.

# Instructions
# Define a function grades_std_deviation(variance).
# return the result of variance ** 0.5
# After the function, create a new variable called variance and store the result of calling grades_variance(grades).
# Finally print the result of calling grades_std_deviation(variance).

def grades_std_deviation(variance):
    return variance ** 0.5
    
variance = grades_variance(grades)

print grades_std_deviation(variance)

# Review
# You've done a great job completing this program.

# We've created quite a few meaningful functions. Namely, we've created helper functions to print a list of grades, compute the sum, average, variance, and standard deviation about a set of grades.

# Let's wrap up by printing out all of the statistics.

# Who needs to pay for grade calculation software when you can write your own? :)

# Instructions
# Print out the following:

# all of the grades
# sum of grades
# average grade
# variance
# standard deviation

print print_grades(grades)
print grades_sum(grades)
print grades_average(grades)
print grades_variance(grades)
print grades_std_deviation(variance)