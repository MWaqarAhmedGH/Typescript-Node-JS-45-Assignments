//  Assignment # 11
/*  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing
each element in the list, one at a time.  */
var names = ["Ahmed", "Sidra", "Nida", "Ali", "Jawwad"];
//  For Loop
console.log("For Loop Method");
for (var i = 0; i < names.length; i++) //  It has 3 parameters: Initialization,condition,increament/decreament
 {
    console.log(names[i]);
}
//  For Each  (forEach is a buitin Method/Function)
console.log("For Each Method");
names.forEach(function (student) {
    console.log(student);
});
//  ForOf Loop (It can be used with the keyword for)
console.log("For Of Method");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var kids = names_1[_i];
    console.log(kids);
}
