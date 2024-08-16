// Assignment # 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Muhammad ahmed ali";
// Lowercase (by default it is available)
console.log(personName.toLowerCase());
// Uppercase (by default it is available)
console.log(personName.toUpperCase());
// Create a function named Titlecase (which converts any string into Title Case)
function TitleCase(strin) {
    var words = strin.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(TitleCase(personName));
