//  Assignment # 13

/*  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”  */

let transportationMode: string[] = ["Car", "Motorcycle", "Bicycle", "Bus"]

//  For Loop
for (let i=0; i < transportationMode.length; i++)
{
    console.log(`I would like to own a  ${transportationMode[i]}`);
}

//  For Each Loop
transportationMode.forEach(variable1 =>
    {
        console.log(`I love to ride/derive ${variable1}`);
    });

//  For Of Loop
for (let variable1 of transportationMode)
{
    console.log(`I want to own a ${variable1}`);
}
