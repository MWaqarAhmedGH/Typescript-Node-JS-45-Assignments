//  Assignment # 17

/*  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people 
for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your 
list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an 
empty list at the end of your program.  */

let guestList: string [] = [ "Waqar", "Sana", "Ali", "Zahara", "Anum", "Sumaira" ];
console.log(guestList);  //  Printing the guest list
console.log("Due to the non availability of new tables, we can invite only two people for dinner.");

while (guestList.length > 2)  //  Using while loop method for the removal of the elements
{
    let variable: string | undefined = guestList.pop();  //  By using pop method, removal is done untill loop execution.
    console.log(`Sorry ${variable}, we can not invite you for dinner.`);
}

console.log(guestList);  //  Printing updated guest list with only two elements remaining

guestList.forEach( variable =>
{
    console.log(`${variable}, You are still invited for the dinner.`);  //  Printing invitation for remaining 2 guests
}
);

guestList.splice(0, 2);  //  By using splice method, removing 2 elements from the guest list.
console.log("Now the Guest List is empty ", guestList);  //  Printing the empty guest list.

