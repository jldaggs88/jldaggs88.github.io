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

// 2. String Properties //
var meString = "This long!"
meString.length; //Prints the length of the string
 
// 3. ...String Methods //

//.concat() Concatnates two or more string and return a new string combined
var string1 = "Never ";
var string2 = "better!";
var howYouDoing = string1.concat(string2); //"Never better"prints to the console

//.split() Split the strings character into their own strings
howYouDoing.split(" ");//Prints 'N', "e", "v", "e", "r", " ", "b", "e", "t", "t", "e", "r", "!" 

//.slice Takes apart the string and returns a new one with the changes
howYouDoing.slice(1); //Prints "ever better!"

//.includes() Checks if a character is inside a string.
howYouDoing.includes("!"); //Returns true

//.indexOf() Prints the position of the 1st occurence of a value
howYouDoing.indexOf("o"); //Returns index 1


