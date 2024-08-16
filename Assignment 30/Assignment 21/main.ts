//  Assignment # 21

/*  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing 
these items.  */


let student :
{
    name: string,
    age: number,
    enrollmentNum: number,
    course: string,
    institute: string
} = 
{
    name: "Sana",
    age: 24,
    enrollmentNum: 152538,
    course: "Artificial Intelligence", 
    institute: "GH"
};

//  1st way to access an object
console.log("Here is my object Student details:", student);

//  2nd way to access an object
console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);
console.log(`Student Enrollment Num: ${student.enrollmentNum}`);
console.log(`Student Course: ${student.course}`);
console.log(`Student Institute: ${student.institute}`);

//  3rd way to access an object
console.log(`Student Name: ${student["name"]}`);
console.log(`Student Age: ${student["age"]}`);
console.log(`Student Enrollment Num: ${student["enrollmentNum"]}`);
console.log(`Student Course: ${student["course"]}`);
console.log(`Student Institute: ${student["institute"]}`);

