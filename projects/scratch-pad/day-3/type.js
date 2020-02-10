// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // We can decipher if a value is an array using the Array.isarray() method.
    // Typeof will not decipher between an object and an array.
    if (Array.isArray(value)) { // If else statement to determine if condition is true.
        return true;
    } else { // Run the else codeblock if the value is not an array at the function call.
        return false;
    }  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // If else statement to set conditions and run code block if the statment is true.
    // || Double Pipe comparison (OR) to determine if any of the conditions are true.
    if (value === null || Array.isArray(value) || value instanceof Date) {
        return false; 
    } else if (typeof value === "object") {
        return true;
    } else { 
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // If else statement to set conditions and run code block if the statment is true.
    // || Double Pipe comparison (OR) to determine if any of the conditions are true.
    if (value === null || value instanceof Date) {
        return false;
    } else if (Array.isArray(value) || typeof value === "object") {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 function typeOf(value) {
//     // YOUR CODE BELOW HERE //
    // If else statement used to evaluate the true of the listed condition
    if (Array.isArray(value)) { // Array.isArray() to determine if value is and array.
        return "array";
    } else if (value === null) { // Boolean statment with value strictly equal to null to determine if the value is null.
        return "null";
    } else if (value instanceof Date) { // Instanceof Date to determine whether the value is a date.
        return "date";
    } else {
        return typeof value; //Typeof to determine is value is a number, string, undefined, boolean, or function.
    }
    
    
//     // YOUR CODE ABOVE HERE //
 }

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
