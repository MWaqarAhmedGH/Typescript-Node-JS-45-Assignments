//  Assignment # 35

/*  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about 
each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have 
in common. You could print a sentence such as Any of these animals would make a great pet!  */

let animal: string [] = ["Cow", "Goat", "Camel"];

for (let i=0; i<animal.length; i++)  //  By using for loop
{
    console.log(animal[i]);  //  Printing animal name
    console.log(`A ${animal[i]} would make a great pet.`);  //  Printing sentence about each animal
}
//  Adding a line at the end of your program
console.log("One thing these animals have in common: They prodeuce milk & it is used commonly.");
