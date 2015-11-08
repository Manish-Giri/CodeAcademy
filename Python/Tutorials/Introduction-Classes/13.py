# Override!
# Sometimes you'll want one class that inherits from another to not only take on the methods and attributes of its parent, but to override one or more of them.

# class Employee(object):
    # def __init__(self, name):
        # self.name = name
    # def greet(self, other):
        # print "Hello, %s" % other.name

# class CEO(Employee):
    # def greet(self, other):
        # print "Get back to work, %s!" % other.name

# ceo = CEO("Emily")
# emp = Employee("Steve")
# emp.greet(ceo)
# # Hello, Emily
# ceo.greet(emp)
# # Get back to work, Steve!
# Rather than have a separate greet_underling method for our CEO, we override (or re-create) the greet method on top of the base Employee.greet method. This way, we don't need to know what type of Employee we have before we greet another Employee.

# Instructions
# Create a new class, PartTimeEmployee, that inherits from Employee.
# Give your derived class a calculate_wage method that overrides Employee's. It should take self and hours as arguments.
# Because PartTimeEmployee.calculate_wage overrides Employee.calculate_wage, it still needs to set self.hours = hours.
# It should return the part-time employee's number of hours worked multiplied by 12.00 (that is, they get $12.00 per hour instead of $20.00).
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
