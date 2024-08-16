//  Assignment # 18

/*  Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print list to show that its order has changed.  */

let fivePlaces: string [] = ["Singapore", "Japan", "Switzerland", "Malaysia", "Canada"];

console.log("Original Array", fivePlaces);  //  Printing array in its original order

//  Printing in alphabetical order by using sort()  (Making a copy array by using slice())
console.log("Alphabetical Array", fivePlaces.slice().sort());  

console.log("Original Array", fivePlaces);  //  Printing array in its original order

//  Printing in reverse alphabetical order by using reverse()  (Making a copy array by using slice())
console.log("Reverse Alphabetical Array", fivePlaces.slice().sort().reverse());  

console.log("Original Array", fivePlaces);  //  Printing array in its original order

console.log("Now reverse order changed", fivePlaces.reverse());  //  Changing & printing reverse order

//  Again reverse & print to show it’s back to its original order
console.log("Again changing reverse order", fivePlaces.reverse());  

//  Sorting & printing in alphabetical order by using sort()  (Making a copy array by using slice())
console.log("Sorting & Printing in alphabetical order", fivePlaces.slice().sort());

//  Sorting & printing in reverse alphabetical order by using sort()  (Making a copy array by using slice())
console.log("Sorting & Printing in reverse alphabetical order", fivePlaces.slice().sort().reverse());

