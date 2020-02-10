// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    // Declare an empty string to collect the output that will be return once the function is called.
       var revString = "";
    // For loop is best for iterating through a string and log all its elements.
    // We know to stop looping once we have reached the first index since we are decrementing through the string.
    // To acces an individual character in a string use bracket notations or a .length property.
    // To concatenate string use the += assignment operator. The strings will add as they iterate.
     for (var i = input.length - 1; i >= 0; i--) {
         revString += input[i];
     }
     return revString; // A function call will print our revString string to the console.
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}