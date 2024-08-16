//  Assignment # 44

/*  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one 
parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is 
being ordered. Call the function three times, using a different number of arguments each time.  */

function makeSandwich(...items: string[])  //  Making a function called makeSandwich
{
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
  
makeSandwich("Veggie", "Mayo Cheese");  //  Calling a function makeSandwich for 1st time
makeSandwich("Chicken", "French Dip", "");  //  Calling a function makeSandwich for 2nd time
makeSandwich("Tomato", "Grilled Cheese", "Club Sandwich", "Cuban Sandwich");  //  Calling a function makeSandwich for 3rd time

