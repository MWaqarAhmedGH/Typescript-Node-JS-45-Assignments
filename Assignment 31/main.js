"use strict";
//  Assignment # 31
/*  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.  */
//  Important Note: There is no array found in exercise 28 so it is a typo mistake & the correct exercise is exercise 30.
let usernames = ["Admin", "User1_Waqar", "User2_Ahmed", "User3_Sawera", "User4_Sana"];
usernames.length = 0; //  Remove all of the usernames from your array
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("The list of users is not empty.");
    //  By using for loop
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "Admin") {
            console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
    //  By using forEach loop
    console.log("The list of users is not empty.");
    usernames.forEach(variable => {
        if (variable === "Admin") {
            console.log(`Hello ${variable}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${variable}, thank you for logging in again.`);
        }
    });
}
