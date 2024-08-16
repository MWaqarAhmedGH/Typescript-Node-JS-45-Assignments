//  Assignment # 12

/*  Greetings: Start with the array you used in exercise 11, but instead of just printing each person's name, 
print a message to them. The text of each message should be the same, but each message should be personalised 
with the person's name.  */

let names:string [] = ["Ahmed", "Sidra", "Nida", "Ali", "Jawwad"];

//  For Loop
for (let i:number=0;i<names.length;i++)
    {
        console.log(`${names[i]}, How are you today?`);
    }

//  For Each Loop
names.forEach (friend=>
    {
        console.log(`${friend}, Hope you are doing well!`);
    }
);

//  For Of Loop
for (let friendName of names)
    {
       console.log(`${friendName}, I am from Wednessday slot of GH.`); 
    }
