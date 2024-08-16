//  Assignment # 32

/*  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique 
username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the 
person will need to enter a new username. If a username has not been used, print a message saying that the username is 
available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  */

let current_users: string [] = ["Syed", "Waqar", "Ahmed", "Ameen", "Shanzey"];
let new_users: string [] = ["Farhan", "Waqar", "Ali", "Sawera", "Shanzey"];

new_users.forEach( (variabl1) =>   //  By using forEach loop
{
    if ( current_users.some( (variabl2) => variabl2.toLowerCase() === variabl1.toLowerCase()) )  //  Case sensitivity comparison
    {
      console.log(`${variabl1} will need to enter a new username.`);  //  Printing a given message
    } 
    else 
    {
      console.log(`${variabl1} is available.`);  //  Printing a given message
    }
});
