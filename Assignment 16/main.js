//  Assignment # 16
/*  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite
to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found
a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.  */
var guestList = ["Waqar", "Sana", "Ali", "Zahara"];
console.log("The guest list is below.");
console.log(guestList); //  Printing the guest list
guestList.unshift("Anum"); //  Adding a new guest to the begining of the guest list by using unshift method
console.log("Guest \"Anum\" is added at the begining of guest list is below.");
console.log(guestList); //  Printing the modified guest list
var x = guestList.length / 2;
guestList.splice(x, 0, "Sawera"); //  Adding a new guest to the middle of the guest list by using splice method
console.log("Guest \"Sawera\" is added at the middle of the guest list is below.");
console.log(guestList); //  Printing the modified guest list
guestList.push("Sumaira"); //  Adding a new guest to the end of the guest list by using push method
console.log("Guest \"Sumaira\" is added at the end of the guest list is below. ");
console.log(guestList); //  Printing the modified guest list
guestList.forEach(function (variable) {
    console.log("Dear ".concat(variable, ", You are invited for the dinner."));
});
//  Printing an statement at the end of the program
console.log("Good News! We have found a bigger dinner table.");
