// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Use a for-loop to iterate through an array. 
  // Start: First [0] index
  // Stop: Last index
  //Increment: By 1
  
  // Using the .length property will determine the length of the given array.
  // ++ arithmetic operator will add 1 the variable i after it determine the stop condition is true.
  for (var i = 0; i <= array.length; i++) {
   console.log(array[i]); // To print the array console utilizing a bracket notation to add its values.
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Use a for-loop to iterate through an array.
  // Starting condition: Last Index of the array
  // Stopping condition: 0 Index
  // Increment: -1
  
  // Set i to equal to final value of the array using the .length-1 property.
  // As long as i is qreater than the 0 which is the first index of the array we will continue to subtract 1 using a -- arithmetic operator.
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]); // Using a bracket notation around i will log our array as its values to the console.
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object); // use object.keys() method to return the array of the object
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { // using for in loop to iterate over an object 
    console.log(key); //console log the keys of said object until list is complete
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.values(object); // use Object.values() method to return an array containing given objects values
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { // using for-in loop to loop over given object to get access to the keys in object
    console.log(object[key]);
  } 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object).length; // using Object.keys method to return an array and then the .length property on given array
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

  // Create an array literal to house the values of the array.
  var loopedArray = [];
  
  // We can only loop over an object using a for-in loop.
  for (var keys in object){
    loopedArray.push(object[keys]); // The .push method can be use on the loopedArray variable to add our given object's keys as elements in our list. 
  }
  // Start: Last index
  // Stop: 0 index
  // Incrementer: -1
  // Variable i is asssigned to the final index of the loopedArray and will iterate backwards until it reaches the first index.
  for (var i = loopedArray.length-1; i >= 0; i--){
    console.log(loopedArray[i]); // Each of the loopedArray's values will be list in reverse in the console.
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
