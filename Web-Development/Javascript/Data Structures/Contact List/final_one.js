var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "(206) 455-9899";
friends.bill.address = ['One Microsoft Way','Redmond','WA','98052'];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(210) 455-9899";
friends.steve.address = ['One Infinite Loop','Cupertino','CA','98052'];

function list(friends) {
    for(var key in friends) {
        console.log(key);
    }
} 

function search(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}