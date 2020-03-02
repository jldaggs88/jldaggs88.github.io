// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
    // Use reduce method and concat method 
    // arrays into a single array that has all the elements of the original arrays.
    return arrays.reduce((flat, current) => flat.concat(current), []);
 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {//Function takes a value, test, update and body.
    // Use a regular loop to define the function
    //Each iteration run the 1st test function on the current loop value
    //Stop if test returns false
    for ( var value = start; test(value); value = update(value)) {
    //Call the body function with value as its argument
    //Incrementer should reassign value by calling the update function
        body(value);
    }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) { //Every function takes an array and a predicate function
//Using a loop iterate through the elements of the given array
 for (var element of array) {
    //If predicate function call finds the test is not true for all element print false
    if (!predicate(element)) return false;
  }
  //Return true if the given function returns true for all the given arrays elements
  return true;
}
//Use .some method to check if any elements pass the test
function every2(array, predicate) {
    //Returns true if some the elements pass the given test
  return array.some(element => predicate(element));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {//Function that computes the dominant writing direction in a string

let counted = countBy(text, char => {
    // Assign a container to hold whats at the checked position.
     let script = characterScript(char.codePointAt(0));
     // If the number exist return the direction of the script return "none" if it doesn't
    return script ? script.direction : "none";
    //Use .filter method to create a new array from the iterated collection testing if name is not "none"
  }).filter(({name}) => name != "none");
// If the length of the count string is loosely equal to 0 return a string of left to right
  if (counted.length == 0) return "ltr"; 
// Use .reduce method to return the array as an single value
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
