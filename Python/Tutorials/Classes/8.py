# Modifying member variables
# We can modify variables that belong to a class the same way that we initialize those member variables. This can be useful when we want to change the value a variable takes on based on something that happens inside of a class method.

# Instructions
# Inside the Car class, add a method drive_car() that sets self.condition to the string "used".
# Remove the call to my_car.display_car() and instead print only the condition of your car.
# Then drive your car by calling the drive_car() method.
# Finally, print the condition of your car again to see how its value changes.

class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    def display_car(self):
        desc = "This is a " + self.color + " " + self.model + " with " + str(self.mpg) + " MPG."
        return desc
        
    
    def drive_car(self):
        self.condition = "used"

my_car = Car("DeLorean", "silver", 88)

print my_car.condition
my_car.drive_car()
print my_car.condition