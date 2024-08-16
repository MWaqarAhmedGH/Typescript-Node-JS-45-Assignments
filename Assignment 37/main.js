//  Assignment # 37
/*  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love
TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
message.  */
//  A function is having 2 default parameters
function make_shirt(size, textofMsg) {
    if (size === void 0) { size = "Large"; }
    if (textofMsg === void 0) { textofMsg = "I love TypeScript."; }
    console.log("Size of thr Tshirt is ".concat(size, " & the message is ").concat(textofMsg, "."));
}
make_shirt(); //  Calling function by providing 0 arguments (calling function with default values)
make_shirt("Medium"); //  Calling function by providing 1 arguments
make_shirt("XL", "Different message"); //  Calling again function by providing 2 arguments
