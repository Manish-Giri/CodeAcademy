/*Private Eye
Recall that:

Public properties can be accessed from outside the class
Private properties can only be accessed from within the class
Using constructor notation, a property declared as this.property = "someValue;" will be public, whereas a property declared with var property = "hiddenValue;" will be private.

In this exercise, hit run and you'll see that all your grades are exposed! You really just want people to know your overall GPA.

Instructions
Modify the StudentReport class so that no grades will be printed to the console in the for-in loop.

However, getGPA should still function properly in the last line.*/

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());