/*Over the Moon
Great! The store is ticking along making money again. The boss is so happy you have just been given a bonus staff discount to the value of 20%.

However the current system doesn't know how to apply the different levels of staff discount that apply. Now the rest of the staff is not happy and demanding you make improvements!

Let's sort it out so that staff can get their well deserved discount.

Instructions
Create an object constructor called StaffMember which takes two parameters—name and discountPercent. And then have the (public) properties name and discountPercent equal the parameters.

To help, we have already created two employees using this constructor. Sally and Bob already have their staff discount set up: Sally getting 5% off and Bob getting 10%.

Create a new instance of the object for yourself called me with your massive staff discount bonus of 20%.*/

// create a constructor for the StaffMember class

function StaffMember(name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Manish", 20);