//  Assignment # 43

/*  Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name.  */

let magicianNames: string [] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
let copy_magicianNames = magicianNames.slice();     //  copy of the array

function show_magicians(name: string [])     //  Making a function called show_magicians
{
    name.forEach( variable =>       //  By using forEach loop
    {
        console.log(variable);      //  prints the name of each magician
    });
}

show_magicians(magicianNames);      //  Calling the function show_magicians()

function make_great(newName: string []): string []     //  Making a function called make_great
{
    const greatMagicians: string [] = [];
    for (let i=0; i<newName.length; i++)
    {
        greatMagicians.push("The Great" + newName[i]);
        console.log(newName[i]);
    }
    return greatMagicians;
}

console.log("Calling the function make_great()");
make_great(magicianNames);      //  Calling the function make_great()
console.log("Calling the function show_magicians()");
show_magicians(magicianNames);    //  Calling the function show_magicians() to see that the list has actually been modified


let copy_make_great = make_great(copy_magicianNames);   //  Return the new array and store it in a separate array

console.log("\nOriginal Array: \n");
show_magicians(magicianNames);

console.log("\nCopied Array: \n");
show_magicians(copy_make_great);
