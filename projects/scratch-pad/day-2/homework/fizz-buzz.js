// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz(numbers) {
    // YOUR CODE GOES BELOW HERE //
    
    // Use a for loop to iterate through starting condition and a stopping condition as long the stopping condiiton evalutes to false.
    // Start : 1
    // Stop: 100
    // Increment: +1
    
    
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            return "Fizz"
        } else if (i % 5 === 0) {
            return "Buzz"
        } else if (i % 3 === 0 && i % 5 === 0) {
            return "FizzBuzz"
        } else { i
        
        }
    
    }
        
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz;
    