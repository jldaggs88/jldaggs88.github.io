// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

     
    //I: 2 number 
    //O: Array
    //C: 
 
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
        //create a container to hold the numbers
const myArray = [];
    
    //implement a for loop and gain access between start and end in ascending order
    if (start < end){
    //if start is greater than we will need to implement a for loop in descending order 
        for (let i = start; i <= end; i++){
    // return the storage conatiner array
            myArray.push(i);
    }
    } else {
        // if start is greater than end
        // implement a for loop in descending order
    for (let i = start; i >= end; i--){
        // send it back to myArray
        myArray.push(i);
    }
}

return myArray;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}