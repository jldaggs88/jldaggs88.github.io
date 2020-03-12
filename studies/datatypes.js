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
To access indivudal characters in a string we use bracket notations with the index inside.
Please see below for some string method and porperties.
*/
var meString = "Oh to be a String!";
meString[1]; //Will print "h" to the console

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
* must be separated by commas and 1 space, and the entire collection must be housed between 
*square brackets. To access elements in an array utilize the index number starting at 0 in combination
*with a bracket notation.
*/

var secondArray = []; // array literal 
var filledArray = ["If it is", 3, "or", "4", false]

filledArray[0]; //Prints "If it is"

// 5. Object // myCurlyBrack = {}
/*
*An object is a complex building block for Javascript. Primitive and reference data types can be
*stored inside an object. Objects contain properties or key and value pairs (key:value) separated by commas that store descriptive information. 
* Objects are best for grouping information thats but also requires other information or values. 
*To access an object's properrties utilize dot or bracket notation.
*/

var monthsObject = {
    month: "December",
    holidays: ["Kawanza", "Christmas", "Jessa's Birthday"],
    numberOfDays: 31
}

monthsObject.month; // "December" will print to the screen"
monthsObject["holidays"]; // ["Kawanza", "Christmas", "Jessa's Birthday"] will print

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
*Objects with no variables are null datatypes. It is the absence of data and undefined
*by the programmer. 
*/

let emptyVariable = null;

// 9. NaN // Not-A-Number
/*
*NaN is a numeric arithmetic computation with numbers and non-numbers evaluating to
*an illegal number.
*/
let cantDoTimesTwo = "You can't divide me." / 2;
console.log(cantDoTimesTwo);  //Prints NaN to the console

//NaN method
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

console.log(Math.log(0)); //Prints -Infinity
console.log(Math.pow(20, 5000)); //Prints Infinity


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


/*Primitive values are passed to a function by copy and complex values are passed to the 
*function by reference. When simple data types is assigned to another that same value can be 
*altered later and it will not effect the other value. Complex data copies will contain the updated information
*when doing the same.
*/
//By reference
var colors = { //Original Container
    favoriteColor: "Mauve",
    secondPlace: "Cornflower Blue"
};
var newColors = colors; //new variable contains the same information as the orignal container
newColors.favoriteColor = "Cornflower Blue";
newColors.secondPlace = "Mauve";

console.log(colors); //Console logging the colors variable will reflect the update newcolors object.
/*
{
*favoriteColor:"Cornflower Blue",
*secondPlace = "Mauve"
}
*/

//By copy
var x = 3;
var y = x;
var y = x + 2;

console.log(y); //Will print 5
console.log(x); //Will print 3

