/*
* STRING MANIPULATION
* 
* String manipulations are property evaluations or methods that allow programmers to work with strings.
*Since they are not objects they do not evaluate using the same methods.
*/
// String methods are as follows:

// 1. With Operators //
var yourString = "This string" + " and this one." // An assignment operator to combine strings.
// += can be utilized as well.

// 2. With string methods //

// .length The length property returns the length of the string.
var stringy = "Never give up!"
stringy.length; // Returns 14

// .length-1  The length -1 returns the final index of the given string.
stringy.length-1; //Returns 13

// indexOf() Finding an index of the given string.
stringy.indexOf("g"); // Returns 6

