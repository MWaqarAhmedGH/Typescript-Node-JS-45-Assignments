"use strict";
//  Assignment # 24
/*  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality & inequality, greater than & less than, greater than or equal to, & less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array  */
let string1 = "Hello Word";
let string2 = "Typescript";
const num1 = 10;
const num2 = 20;
const array = [1, 2, 3, 4, 5, 6];
//  Tests for equality and inequality with strings
console.log("String Test");
console.log(string1 === string2); //  False
console.log(string1 !== string2); //  True
//  Tests using the lower case function
console.log("String Test Using Lower Case");
console.log(string1.toLowerCase() === string2); //  False
console.log(string1.toLowerCase() !== string2); //  True
//  Numerical tests involving equality & inequality, greater than & less than, greater than or equal to, & less than or equal to
console.log("Numerical Tests");
console.log(num1 === num2); //  False
console.log(num1 !== num2); //  True
console.log(num2 < num1); //  False
console.log(num2 > num1); //  True
console.log(num1 <= num2); //  True
console.log(num1 >= num2); //  False
//  Tests using "and" and "or" operators
console.log("Tests using And and Or");
console.log(num1 < num2 && num1 !== num2); //  True
console.log(num2 > num1 || num2 === num1); //  True
//  Test whether an item is in the array
console.log("Finding an element in the array");
console.log(array.includes(4)); //  Finding element "4" in the array: resulted True
console.log(array.includes(10)); // Finding element "10" in the array: resulted False
//  Test whether an item is not in the array
console.log("Finding an element not in the array");
console.log(array.includes(100)); //  Finding element "100" not in the array: resulted False
console.log(array.indexOf(15) === -1); //  Finding element "15" not in the array: resulted not -1:- True
