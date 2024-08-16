//  Assignment # 29

/*  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check 
for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your 
array, the if block should print a statement, such as You really like bananas!  */

let favorite_fruits: string [] = ["Mango", "Watermelon", "Grapes"];

if (favorite_fruits.includes("Mango"))  //  1st if statement
{
    console.log("Mango: I really like Mangoes.");
}

if (favorite_fruits.includes("Watermelon"))  //  2nd if statement
{
    console.log("Watermelon: I really like Watermelon.");
}

if (favorite_fruits.includes("Grapes"))  //  3rd if statement
{
    console.log("Grapes: I really like Grapes.");
}

if (favorite_fruits.includes("Orange"))  //  4th if statement
{
    console.log("Orange: I really like Oranges.");
}

if (favorite_fruits.includes("Apple"))  //  5th if statement
{
    console.log("Apple: I really like Apples.");
}

