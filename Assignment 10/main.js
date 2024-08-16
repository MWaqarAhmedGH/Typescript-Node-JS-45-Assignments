//Assignment # 10
/*  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have
anything specific to write because your programs are too simple at this point, just add your name and the current date
at the top of each program file. Then write one sentence describing what the program does.  */
//Adding Comment in 1st Program (Short Key: Ctrl + ?)
//Define Function Which Calculate The Area of Rectangle
function areaOfRectangle(width, hight) {
    return width * hight;
}
var width = 5; //Assigning Width Value
var hight = 10; //Assigning Hight Value
var area = areaOfRectangle(width, hight); //Assigning Return Value of Rectangle Area to a variable area
console.log("Rectangle Width = ".concat(width, ", Rectangle Hight = ").concat(hight, " and Rectangle Area = ").concat(area));
// Adding comment in 2nd Program (Short Key: Ctrl + ?)
// Define Function Which Calculate The Area of Triangle
function areaOfTriangle(base, hight1) {
    return 0.5 * base * hight1;
}
var base = 5; //Assigning Base Value
var hight1 = 10; //Assigning Hight Value
var area1 = areaOfTriangle(width, hight1); //Assigning Return Value of Triangle Area to a variable area1
console.log("Triangle Base = ".concat(base, ", Triangle Hight = ").concat(hight1, " and Triangle Area = ").concat(area1));
