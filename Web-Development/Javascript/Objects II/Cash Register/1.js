/*Shut the Shop!
You are working for a large supermarket and the cash register has just failed. The boss is not happy as he can't make any money.

To save the day it happens that you let slip to your boss that you know JavaScript and can build a quick virtual cash register until head office sends support staff.

Your boss is over the moon and wants you to get started right away.

Instructions
Create a new object called cashRegister with the property total initialized to 0.

Then change the property total to 2.99 using dot notation.*/

//Create the object called cashRegister 
//and initialize its total property
var cashRegister = {
    total: 0
}

//Using dot notation change the total property
cashRegister.total = 2.99;

/*Manually Add It Up?
Great! The bossman can see that you can tell the cash register the total. But we need the cash register to do more.

Your boss wants a way to manually add the cost of each item. We have written the add method for you. There are two things we should note.

We are using literal notation to include the method add.
We've used the += operator. This is a shorthand way of saying

this.total = this.total + itemCost;
In general, a += b; means "add b to a and put the result of that addition back into a. This is also available for the other basic arithmetic functions: -=, *=, and /= do what you expect.

Instructions
Use the add method to sum up the cost of the following four items.

Eggs 0.98
Milk 1.23
Magazine 4.99
Chocolate 0.45
If we only call the method once, it will just add the first item. So to add up the cost of four items, how many times will we have to call the method?*/

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);




//Show the total bill
console.log('Your bill is '+cashRegister.total);


/*Short-Term Memory
But this method only works as long as you can remember the cost of every item in the store. We need something like a bar code scanner where just knowing the item name will automatically add the cost of that item to the total.

So we create a method called scan. This method takes some item parameter, and adds the cost of this item to the total. item is a string.

We also use a switch statement. Previously, we would have probably used multiple if-else statements. Here, things work in a similar way.

For example, if the item is "eggs" (line 8), we then call the add method, passing through 0.98 as the itemCost. This will add 0.98 to cashRegister.total. If instead the item is "milk" or "chocolate" or "magazine", the relevant itemCost is added. Note no default case is needed for this switch statement.

Instructions
Write the add method which has a single parameter, itemCost. It will add the itemCost to the total.
We have partially written the scan method for you and started a switch statement. Add the following 2 items to the switch statement:
"magazine", 4.99
"chocolate", 0.45*/

var cashRegister = {
    total: 0,
//insert the add method here    
    add: function(itemCost) {
        this.total += itemCost;
    },
    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine": 
            this.add(4.99);
            break;
            
        case "chocolate": 
            this.add(0.45);
            break;
        
        default: this.add(0);

        }
        
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");


//Show the total bill
console.log('Your bill is '+cashRegister.total);
Finally, use the scan method to buy "eggs" twice and a "magazine" three times.