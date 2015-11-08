# This Looks Like a Job For...
# On the flip side, sometimes you'll be working with a derived class (or subclass) and realize that you've overwritten a method or attribute defined in that class' base class (also called a parent or superclass) that you actually need. Have no fear! You can directly access the attributes or methods of a superclass with Python's built-in super call.

# The syntax looks like this:

# class Derived(Base):
   # def m(self):
       # return super(Derived, self).m()
# Where m() is a method from the base class.

# Instructions
# First, inside your PartTimeEmployee class:

# Add a new method called full_time_wage with the arguments self and hours.
# That method should return the result of a super call to the calculate_wage method of PartTimeEmployee's parent class. Use the example above for help.
# Then, after your class:

# Create an instance of the PartTimeEmployee class called milton. Don't forget to give it a name.
# Finally, print out the result of calling his full_time_wage method. You should see his wage printed out at $20.00 per hour! (That is, for 10 hours, the result should be 200.00.)

class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00

# Add your code below!
class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return self.hours * 12.00
    def full_time_wage(self, hours):
        return super(PartTimeEmployee, self).calculate_wage(hours)
        
milton = PartTimeEmployee("Milton")
print milton.full_time_wage(10)