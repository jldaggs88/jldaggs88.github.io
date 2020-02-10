// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

    return function (value){ //Returned a function called test with a parameter (value)
        if (value > base){
            return true;  //Returns whether or not value is greater than base using comparison operator
        } else {
            return false;
        }
    }; 
    // YOUR CODE ABOVE HERE //
}
   //createGreaterThanFilter(7)(9);
/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base){
    // YOUR CODE BELOW HERE //
   
    return function test(value){ //Returned a function called test with a parameter (value)
        return value < base; //Returns whether or not value is less than base using comparison operator 
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // Using an arrow function called string evaluate whether a string starts with a called character.
        return string => {
            if (startsWith.toLowerCase() === string[0].toLowerCase()){ // .toLowerCase to override case sensitivity. Strict comparison will evaluate to true if conditions are met.
                return true;
            } else { // false will be return to the screen once function call is complete is condition evaluates to false.
                return false;
            }
        
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOjW HERE //
        
    // Using an arrow function called string evaluate whether a string ends with a called character.
    return string => {
        if (endsWith.toLowerCase() === string[string.length-1].toLowerCase()) { // .toLowerCase to override case sensitivity. Strict comparison will evaluate to true if conditions are met.
            return true;
        } else { // false will be return to the screen once function call is complete is condition evaluates to false.
            return false;
        }
        
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // Declare an varaible assigned to an array literal.
    var arrayOfStrings = [];
    
    // Use a for-loop to iterate through an array. 
    // Start: 0 Index
    // Stop: Last index
    // Increment: +1
    
    for (var i = 0; i < strings.length; i++) {
        arrayOfStrings.push(modify(strings[i])); // Use .push method to add modifier to the array literal.
    } 
    return arrayOfStrings; // Once the function is called it will log print the string modifications into the array.
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // a for loop will give us access to each element in an array
    for (var i= 0; i < strings.length; i++){
    //test each element in the array with a test 
    //return false if test fail
     if (test(strings[i])=== false){
        return  false;
    }
    //check the next string if test passes
    }
    //if none of the string pass the test return true
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}