// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // The .length property accesses the number of characters in a given string.
    // This is how we decipher the length of a string.
    return string.length; // When the length function is called the given argument's length will be returned.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    // The .toLowerCase() method converts a given string to lowercase.
    return string.toLowerCase(); // When the toLowerCase function is called the given agrument will be return lowercased string.
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // The .toUpperCase() method converts a given string to uppercase.
    return string.toUpperCase(); // When the toUpperCase function is called the given agrument will return an uppercase string.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    // The replace() method will search the given string for a pattern.
    // Using /pattern/ and (g) the global modifier syntax on the search value will remove all the spaces bewteen the string and replaced them with a dash.
    // The .toLowerCase method will protect the function from case sensitivity.
    return string.replace(/[' ']/g,'-').toLowerCase(); // When the toDashCase function is called the given argument will return with dashes instead of spaces. 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    // A bracket notation can be used to access the characters in a string using its numerical index. Indexes start with the number zero.
    // Using .toLowerCase() will mute the case sensistivity in the given strings index as well as the given character.
    // Strict evaluation using a the comparison operator (===) will determine if the input string begins with the input character.
   return string[0].toLowerCase() === char.toLowerCase(); // When the beginsWith function is called it will evaluate to true or false.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE // 
    
    // The .charAt() method will return the chararacter that is at a specfic index. 
    // Using .toLowerCase() will mute the case sensistivity of the given strings last character as well as the given character.
    // Strict evaluation using a the comparison operator (===) will determine if the input string ends with the input character.
    return string.charAt(string.length-1).toLowerCase() === char.toLowerCase(); // When the beginsWith function is called it will evaluate to true or false.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // The .concat() method creates a new string that contains the combined strings.
    // The (+=) assignment operator is another option to combine strings. 
    return stringOne.concat(stringTwo); // When the function concat is called it will return a combined string.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Declare a variable called args to store a collection of arguments. 
    // The Array.from() creates an array from an array-like object. 
    var args = Array.from(arguments);
     // The .join() method returns the strings combined together with "" during the call of function join.
    return args.join("");
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // We need to compare the length property of two strings and set conditions to take certain action.
    // Use the .length property on the strings and a comparison operator to determine which string is the longest.
    // An if else statement will run specfic code block based on whether or not the condition is met. 
    if (stringOne.length > stringTwo.length) { // If stringOne is greater than stringTwo stringOne... 
        return stringOne; //...stringOne will return once the function is called with two strings as agruments.
    } else { // Else if statement meaning if the opposite of the conditions above are met. If stringOne is less than stringTwo...
        return stringTwo; //...stringTwo will return once the function is called with two strings as agruments.
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // We can compare strings by creating an if else statement and setting is conditions to run a specfic code block if the condition evaluates to true.
    // The letters in a string will determine its lexicographical order A(smallest)-Z(largest). 
    if (stringOne > stringTwo) { // If the condition is true... 
      return -1; // ...return -1 to the console at the function call.
    } else if (stringTwo > stringOne) { // Else if the first condition is false and the this one is true...
        return 1; //... return 1 to the console at the function call.
    } else { // Else the previous conditions are false the strings are equal.
        return 0; // The else statment will evaluate to true and return 0 to the console at the function call.
    }
  
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // We can compare strings by creating an if else statement and setting it conditions to run a specfic code block if the condition is met.
    // The letters in a string will determine its lexicographical order A(smallest)-Z(largest). 
    if (stringOne > stringTwo) { // If the condition stringOne is greater than stringTwo evalutes to true...
      return 1; // ...run the code block to return 1 to the screen.
    } else if (stringOne < stringTwo) { // Else if the condition stringOne is less than stringTwo evaluates to true instead...
      return -1; //...run the {codeblock} and return -1 to the console.
    } else { // Else none of the previous conditions are true or strings are equal...
      return 0; // run the codeblock and return 0 to the console.
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending;
    module.exports.sortDescending = sortDescending;
}
