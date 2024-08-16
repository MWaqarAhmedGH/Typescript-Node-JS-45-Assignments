//  Assignment # 40

/*  Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an 
artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to 
make three dictionaries representing different albums. Print each return value to show that Objects are storing the album 
information correctly. Add an optional parameter to make_album() that allows you to store the number of on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new 
function call that includes the number of tracks on an album.  */

function make_album(artistName : string, albumTitle : string, tracks ?: number)  //  Making function with optional parameter
{
    let album :     //  Making object
    {
        name : string, 
        title : string, 
        Track ?: number
    } =
    {
        name : artistName,
        title : albumTitle,
        Track : tracks
    }

    return album  //  Rectuning object
}
console.log(make_album("Atif Aslam", "Jal Pari"));  //  Calling function with only 2 arguments
console.log(make_album("Shahzad Roy", "Dholna"));  //  Calling function with only 2 arguments
console.log(make_album("Jawwad Ahmed", "Mehndi", 100));  //  Calling function with only 3 arguments
