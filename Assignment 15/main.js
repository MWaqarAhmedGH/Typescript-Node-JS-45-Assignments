//  Assignment # 15
/*  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest
who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.  */
var guestList = ["Waqar", "Sana", "Ayat Waqar", "Sawera"];
console.log("Here is my guest list = ".concat(guestList)); //  Printing the guest list
// By using splice method, goto 2nd index & remove 1 element "Ayat Waqar" from guest list & return that element to variable x
var x = guestList.splice(2, 1);
console.log("".concat(x, " is unable to make dinner.")); //  Printing the name of the person who can't make dinner (removed element)
//  By using splice method, goto 2nd index & remove 0 element from guest list & return that element to variable y
//  (Nothing will return to variable y) & add an element "Zahara" to index 2 in the guest list 
var y = guestList.splice(2, 0, "Zahara");
console.log("Now modified guest list is ".concat(guestList)); //  Guest list is modified now
//  Now Printing the invitation message for each person from the guest list
guestList.forEach(function (variable1) {
    console.log("".concat(variable1, ", You are invited for dinner."));
});
