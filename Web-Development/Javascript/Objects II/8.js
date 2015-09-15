/*Dressed to Impress
Let's get some practice working with hasOwnProperty. It is an invaluable tool when working with objects!

Try to run the code in the editor as it is. You should get an error because shorts is not a property of the suitcase object.

Let's write some code to test for this so we can avoid this nasty error later.

Instructions
Remove the console.log statement.

Write an if statement that checks to see if suitcase has the shorts property.

If your if statement evaluates to true, print the value of the shorts property.

If your if statement evaluates to false, set the shorts property to any value you wish using dot notation. Then print the value of the shorts property.*/



var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);

if(suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
}

else {
    suitcase.shorts = "Mexican";
    console.log(suitcase.shorts);
}