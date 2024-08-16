//  Assignment # 27

/*  Alien Colors # 3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.  */


//  First version of this program
let alien_color: string = "green";
if (alien_color === "green")  //  If the alien’s color is green.
{
    console.log("Color is green, Player earned 5 points.");
}
else if (alien_color === "yellow") //  If the alien’s color is yellow.
{
    console.log("Color is yellow, Player earned 10 points.");
}
else if (alien_color === "red")  //  If the alien’s color is red.
{
    console.log("Color is red, Player earned 15 points.");
}


//  Second version of this program
alien_color = "yellow";
if (alien_color === "green")  //  If the alien’s color is green.
{
    console.log("Color is green, Player earned 5 points.");
}
else if (alien_color === "yellow") //  If the alien’s color is yellow.
{
    console.log("Color is yellow, Player earned 10 points.");
}
else if (alien_color === "red")  //  If the alien’s color is red.
{
    console.log("Color is red, Player earned 15 points.");
}


//  Third version of this program
alien_color = "red";
if (alien_color === "green")  //  If the alien’s color is green.
{
    console.log("Color is green, Player earned 5 points.");
}
else if (alien_color === "yellow") //  If the alien’s color is yellow.
{
    console.log("Color is yellow, Player earned 10 points.");
}
else if (alien_color === "red")  //  If the alien’s color is red.
{
    console.log("Color is red, Player earned 15 points.");
}

