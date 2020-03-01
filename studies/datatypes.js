/**  
*DATATYPES:
* 
* Datatypes can be primitive and non primitive. Primitive datatypes or values are immutable values that cannot be changed.
* Examples of primitive data types have no object or method. Primitive data types are numbers, strings, boolean, null, undefined, and
* NaN (not a number). Non primitive datatypes are references created by the programmer. They include
* arrays and other objects. They are used to methods to perform a certain action.
*
*/

// 1. Number // 12345
/*
*Numbers are simple data types written with or without decimals.
*/
var aNumber = 33;
var anotherNumber = 3.3;

// 2. String // "This is a string"
/*
*A string is a collection of characters that can include spaces and numbers inside of quotations.
String methods and properties do not change the existing value. They return a new 
one. 
*/
var meString = "Oh to be a String!";


// 3. Boolean //
/*
* Booleans are great with setting conditions in loops and if else conditional statements. 
*True and false are its only values. 
*/ 
var loveToCode = true;
var giveUp = false;

// 4. Array // ["This", 1, "is", true]
/*
* Is a collection of values. Those values can be any data type such as strings, booleans,
* other arrays, numbers and other objects. Arrays have indexes or addresses that 
*start with zero as its first element. Arrays must be assigned to a variable, each element
* must be separated by commas and 1 space, and the entire collection must be housed between square brackets.
*/

var secondArray = []; // array literal 
var filledArray = ["If it is", 3, "or", "4", false];

// 5. Object // myCurlyBrack = {}
/*
*An object is a complex building block for Javascript. Primitive and reference data types can be
*stored inside an object. Objects contain properties or key and value pairs (key:value) separated by commas that store descriptive information. 
* Objects are best for grouping information thats but also requires other information or values. 
*/

var monthsObject = {
    month: "December",
    holidays: ["Kawanza", "Christmas", "Jessa's Birthday"],
    numberOfDays: 31
}

// 6. Function // function takeAction(){};
/*
*It is a useable code that will produce different results by evaluating the arguments set
*using a particular rule. Functions are objects with properties and methods. Functions can be used
*multiple times. Define with the keyword function followed by the name of the function, parameters in parenthesis and 
*followed by curly brackets that contain an action to take on the parameters set. Outside
*of the curly brackets you can call the function. This is the process of placing arguments inside
*of parenthesis after the name of the function.
*/

// 7. undefined // var notDefined;
/* 
*Undefined is any property that initially isn't assigned. Types, values, and variables.
*/
var gonnaDefineLater;

// 8. null //
/*
*Objects with no variables are null datatypes. It is the absence of data. 
*/

let emptyVariable = null;

// 9. NaN // Not-A-Number
/*
*NaN is a value that evaluates to any but a number. Undefined by the programmer.
*
*/

isNaN(7); // prints false
isNaN("Not a number"); //prints true

// 10. Infinity and -Infinity //
/*
*A number value that equals a positive infinity value (Infinity).
*A number value that equals a negative infinity (-Infinity).
*The upper limit of the floating point number is 1.797693134862315E+308. Infinity
*is displayed once this is exceeded. 
*The lower limit of the floating point number is -1.797693134862315E+308. -Infinity
*is displayed once this is exceeded. 
*
*/

// 11. What is the difference between primitive/simple and complex data types?
/*
* Datatypes can be primitive and non primitive. Primitive datatypes or values are immutable values that cannot be changed.
* Examples of primitive data types have no object or method. Primitive data types are numbers, strings, boolean, null, undefined, and
* NaN (not a number). Non primitive datatypes are references created by the programmer. They include
* arrays and other objects. They are used to methods to perform a certain action.
*
*Simple or primitive datatypes hold the original value. They are atomic, immutable, and copied by value. 
*Complex or non-primitive datatypes are passed by reference and their size is indefinite. They are mutable.
*/

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
/*
*When using primitive values originally assigned to a variable is copied to the new variable from the original.
*/
var original = "One and Only";
var newB = original; //prints "One and Only" to the console
/*
*When using or accessing a complex value such as an object we utilize the name of the data to do an action. This doesn't 
*adjust the original code. It only refers to it.
*/
function passArgs(value) {
    return "I'm still the original!"
}
passArgs(3);




