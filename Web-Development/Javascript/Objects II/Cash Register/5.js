/*Bleep Bleep
The boss looks down at his pager to see Register 8 needs assistance. They have scanned an item too many times and need to void the last transaction.

So he turns to you and says: "Okay JavaScript Ninja! What do we do now?!"

Instructions
We need to keep track of how much the last transaction was. Modify the add method to keep track of the amount of the last transaction. This should be tracked in a new property, lastTransactionAmount.

Add a method called voidLastTransaction that subtracts the last amount transacted from total.

Then use the new method to void the last item we scanned. Finally, scan only 3 of the same item instead.*/

var cashRegister = {
    total:0,
    
    lastTransactionAmount:0,
    
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    
    
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);




//Show the total bill
console.log('Your bill is '+cashRegister.total);