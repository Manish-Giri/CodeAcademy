/*I Have to Scan It More Than Once?
Is that a smile on the boss's face? Well, there was one until he realized that your system requires every item to be scanned individually. He finds this pretty inefficient and you probably agree. Let's get real—it was pretty annoying having to call the scan method five times in the previous exercise!

What can we do? What is the limitation of the scan method? Well, it has just one parameter, item, and you can't specify anything related to quantity.

Instructions
Modify the scan method such that if we tell it the quantity of each item, it will be able to add the right amount to the total. Since you currently tell scan nothing about quantity, it may be useful to create another parameter.

Scan 4 of each item using your improved scan method. Previously we would have needed to call scan 16 times! Now it is down to 4.*/

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98* quantity) ; break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99* quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);


//Show the total bill
console.log('Your bill is '+cashRegister.total);