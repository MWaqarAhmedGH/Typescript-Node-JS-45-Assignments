//  Assignment # 41
/*  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the
name of each magician in the array.  */
var magicianNames = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
function show_magicians(name) {
    name.forEach(function (variable) {
        console.log(variable); //  prints the name of each magician
    });
}
show_magicians(magicianNames); //  Calling the function show_magicians()
