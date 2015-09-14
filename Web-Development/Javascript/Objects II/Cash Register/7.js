/*You Deserved It!
Whew! It's been a long day fixing cash registers and now let's actually apply our well-earned discount. Now that we have our objects representing the staff, let's update our cash register to actually apply the discount.

Instructions
On line 10 create a new object called me of type StaffMember for yourself with a staff discount of 20%

Create a new method called applyStaffDiscount in the cashRegister object which accepts a parameter employee. When this method is called, cashRegister should apply the staff member's discountPercent to total.

Under the comment, 'Apply your staff discount by passing the me object, call your new applyStaffDiscount and pass the object me.*/

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = StaffMember("Manish", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    
    applyStaffDiscount: function(employee) {
        this.total -= (this.discountPercent / 100.0);
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));