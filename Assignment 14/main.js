//  Assignment # 14
/*  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them
to dinner.  */
var guestList = ["Syeda", "Zahara", "Sawera"];
//  Invite each person for Dinner
//  For Loop
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", You are heartly invited for dinner."));
}
//  For Each Loop
guestList.forEach(function (variable) {
    console.log("Dear ".concat(variable, ", You are heartly invited for dinner."));
});
//  For Of Loop
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var variable = guestList_1[_i];
    console.log("Dear ".concat(variable, ", You are heartly invited for dinner."));
}
