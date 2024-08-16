//  Assignment # 10

/*  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have 
anything specific to write because your programs are too simple at this point, just add your name and the current date 
at the top of each program file. Then write one sentence describing what the program does.  */

//Adding Comment in 1st Program (Short Key: Ctrl + ?)

//Define Function Which Calculate The Area of Rectangle

function areaOfRectangle(width:number , hight:number):number
{
    return width*hight;
}
let width=5; //Assigning Width Value
let hight=10; //Assigning Hight Value
let area=areaOfRectangle(width,hight); //Assigning Return Value of Rectangle Area to a variable area
console.log(`Rectangle Width = ${width}, Rectangle Hight = ${hight} and Rectangle Area = ${area}`);


// Adding comment in 2nd Program (Short Key: Ctrl + ?)

// Define Function Which Calculate The Area of Triangle
function areaOfTriangle(base:number, hight1:number):number
{
    return 0.5 * base * hight1;
}
let base=5; //Assigning Base Value
let hight1=10; //Assigning Hight Value
let area1=areaOfTriangle(width,hight1); //Assigning Return Value of Triangle Area to a variable area1
console.log(`Triangle Base = ${base}, Triangle Hight = ${hight1} and Triangle Area = ${area1}`);
