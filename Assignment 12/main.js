//  Assignment # 12
/*  Greetings: Start with the array you used in exercise 11, but instead of just printing each person's name,
print a message to them. The text of each message should be the same, but each message should be personalised
with the person's name.  */
var names = ["Ahmed", "Sidra", "Nida", "Ali", "Jawwad"];
//  For Loop
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i], ", How are you today?"));
}
//  For Each Loop
names.forEach(function (friend) {
    console.log("".concat(friend, ", Hope you are doing well!"));
});
//  For Of Loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("".concat(friendName, ", I am from Wednessday slot of GH."));
}
