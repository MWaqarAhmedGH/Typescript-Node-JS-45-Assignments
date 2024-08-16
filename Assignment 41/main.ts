//  Assignment # 41

/*  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the 
name of each magician in the array.  */

let magicianNames: string [] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

function show_magicians(name: string[])     //  Making a function called show_magicians
{
    name.forEach( variable =>       //  By using forEach loop
    {
        console.log(variable);      //  prints the name of each magician
    });
}

show_magicians(magicianNames);      //  Calling the function show_magicians()
