//  Assignment # 15

/*  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.  */

let guestList: string [] = [ "Waqar", "Sana", "Ayat Waqar", "Sawera" ];

console.log(`Here is my guest list = ${guestList}`);  //  Printing the guest list

// By using splice method, goto 2nd index & remove 1 element "Ayat Waqar" from guest list & return that element to variable x
let x = guestList.splice(2,1,);  
console.log(`${x} is unable to make dinner.`);  //  Printing the name of the person who can't make dinner (removed element)

//  By using splice method, goto 2nd index & remove 0 element from guest list & return that element to variable y
//  (Nothing will return to variable y) & add an element "Zahara" to index 2 in the guest list 
let y = guestList.splice(2,0, "Zahara");
console.log(`Now modified guest list is ${guestList}`);  //  Guest list is modified now

//  Now Printing the invitation message for each person from the guest list
guestList.forEach ( variable1 =>
{
    console.log(`${variable1}, You are invited for dinner.`);
}
);
