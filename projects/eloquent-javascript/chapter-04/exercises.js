////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  // Initialize a binding empty array.
var allNumArray = [];
console.log(allNumArray);
  //  If start is strictly equal to end return the empty array.
  if(start === end){
  return allNumArray;
  /**Else if start is less than or equal to end and also step is greater than 1
  * loop through the all numbers and set stopping condition to include the end
  *value. 
  */
  } else if(start <= end && step > 1) {
  for(var i = start; i <= end; i = i + step ){
  //  Push the number into the array.
    allNumArray.push(i);
  /** Else if the given starting point is greater than or equal to the ending 
  *point and the given step is less than 1 loop through incrementing by the given
  * step as long as the ending point is greater than the starting point.
  */
  } } else if(start >= end && step < 1){
  for(var j = end; j >= start; j = j + step){
  // Push the number into the array.
    allNumArray.push(i);
  /** Else if the given start is less than or equal to the end and the step is 
   * undefined or step is strictly 1 loop through the array and push the 
   * increment into the array.
  */
   } }else if (start <= end && step === undefined || step === 1){
     for( i = start; i <=end; i++){
       allNumArray.push(i);
     }
   }
   // Return the new array.
   return allNumArray;
  }


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  // Function that take an array as an argument and returns the sum of the number.
function sum(array) {
  // Assign a variable 0 as a placeholder.
 var total = 0;
 // Loop through the array add the value to the variable total.
  for (var value of array) {
    total += value;
  }
  // Return the sum.
  return total;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
// Create an empty container.
  var reversedArr = [];
// Loop through the given array decrementing by 1.
  for (var i = array.length - 1; i >= 0; i--) {
// Push into the array at the number index.
    reversedArr.push(array[i]);
  }
// Return the array.
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////// //////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // Loop through as long as i is less than half of the array 
  // Use math.floor to round down half of the array
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
  // Set new variable assigned to the array's index.
    var thatArray = array[i];
  // Set array's index to next index in the array.
    array[i] = array[array.length - 1 - i];
  // Resign the new var to the given index.
    array[array.length - 1 - i] = thatArray;
  }
  // Return the array.
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //Build a list structure
  // Create a container assigned to null when there is no such element
  var list = null;
  //Iterate through the list backwards decrementing by 1
  for (var i = array.length - 1; i >= 0; i--) {
    //Reassign the list to form an object chain
    list = {
      value: array[i],
      rest: list
    };
  }
  //Return the new list
  return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //Build a function that produces an array from list
  //Declare an array literal
 var array = [];
 //pointing to the current sublist
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) { //Function that takes a an element and a list
//Create a new list that adds the element to the front of the input list
return {
value,
rest: list
};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) { //Takes a list, a number
//Return undefined if there is no element
if (!list) return undefined;
//Else if Return the element at the given position in the list
  else if (number == 0) return list.value;
  //Else Recursion call to return 
  else return nth(list.rest, number - 1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {//Function takes two two values, return only true if they are the same
  // This the values are strictly equal return true
  if (a === b) return true;
 // if a is loosely equal to null, or not an object, or b is loosely equal to null, or not an object return false
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
//Create two variable and assign it to the object a's and b's iteration 
  let keysA = Object.keys(a), keysB = Object.keys(b);
//If the lengths do not equal return false
  if (keysA.length != keysB.length) return false;
//Loop through the key in KeyA 
  for (let key of keysA) {
    //If Key does not includes the key from keyA or if a's key and b's key do not equal return false.
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
// Else return true
  return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}
