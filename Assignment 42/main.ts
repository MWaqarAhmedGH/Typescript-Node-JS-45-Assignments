//  Assignment # 42

/*  Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list 
has actually been modified.  */

let magicianNames: string [] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

function show_magicians(name: string [])     //  Making a function called show_magicians
{
    name.forEach( variable =>       //  By using forEach loop
    {
        console.log(variable);      //  prints the name of each magician
    });
}

show_magicians(magicianNames);      //  Calling the function show_magicians()

function make_great(newName: string [])     //  Making a function called make_great
{
    for (let i=0; i<newName.length; i++)
    {
        newName[i] = "The Great" + newName[i];
        console.log(newName[i]);
    }
}

console.log("Calling the function make_great()");
make_great(magicianNames);      //  Calling the function make_great()
console.log("Calling the function show_magicians()");
show_magicians(magicianNames);    //  Calling the function show_magicians() to see that the list has actually been modified

