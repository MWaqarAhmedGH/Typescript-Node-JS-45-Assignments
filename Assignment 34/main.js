"use strict";
//  Assignment # 34
/*  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a
for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should
consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love
pizza!  */
let favPizza = ["BBQ Chicken Pizza", "Pepperoni Pizza", "Cheese Pizza"];
for (let i = 0; i < favPizza.length; i++) //  By using for loop
 {
    console.log(favPizza[i]); //  Print the name of each pizza.
    console.log(`I like ${favPizza[i]}.`); //  Print a simple statement like I like pepperoni pizza.
}
//  Adding three or more lines about the kinds of pizza you like.
console.log("\nBBQ Chicken Pizza is a sweet and savory combination of grilled chicken, barbecue sauce, and red onions. \nPepperoni Pizza is a spicy American favorite featuring crispy pepperoni slices. \nCheese Pizza is the ultimate comfort food, with a generous layer of melted cheese.\nI really love Pizza!");
