//  Assignment # 13
/*  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”  */
var transportationMode = ["Car", "Motorcycle", "Bicycle", "Bus"];
//  For Loop
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a  ".concat(transportationMode[i]));
}
//  For Each Loop
transportationMode.forEach(function (variable1) {
    console.log("I love to ride/derive ".concat(variable1));
});
//  For Of Loop
for (var _i = 0, transportationMode_1 = transportationMode; _i < transportationMode_1.length; _i++) {
    var variable1 = transportationMode_1[_i];
    console.log("I want to own a ".concat(variable1));
}
