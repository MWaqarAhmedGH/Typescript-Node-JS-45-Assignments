//  Assignment # 23

/*  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.  */

let car: string = "Subaru";
let isDriving: boolean = true;
let age: number = 30;

//  String conditional comparision test
//  1
console.log("1 - Is car == 'Subaru' ? I predict True.");
console.log(car === "Subaru");
//  2
console.log("2 - Is car not equal to 'Honda'? I predict True.");
console.log(car !== "Honda");
//  3
console.log("3 - Is driving equal to True? I predict True.");
console.log(isDriving === true);

//  Number conditional comparision test
//  4
console.log("4 - Is age less than or equal to 30? I predict True.");
console.log(age <= 30);
//  5
console.log("5 - Is age greater than 25 years? I predict True.");
console.log(age > 25);




//  String conditional comparision test
//  1
console.log("1 - Is car == 'Toyota' ? I predict False.");
console.log(car === "Toyota");
//  2
console.log("2 - Is car not equal to 'Suzuki'? I predict False.");
console.log(car !== "Subaru");
//  3
console.log("3 - Is driving equal to True? I predict False.");
console.log(isDriving !== true);

//  Number conditional comparision test
//  4
console.log("4 - Is age less than or equal to 40? I predict False.");
console.log(age <= 20);
//  5
console.log("5 - Is age greater than 35 years? I predict False.");
console.log(age > 35);


