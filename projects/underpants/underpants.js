// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){ // Given value will return the given value unchanged.
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    // If the value is an array return "array". Use Array.isarray method since arrays are objects.
    // Do so first to eliminate arrays.
    if (Array.isArray(value) === true) {
        return "array";
    // If the value is null return "null".
    } else if (value === null) {
        return "null";
    //If value is a type of string return "string".
    } else if(typeof value === "string") {
       return "string"; 
    //If value is a type of object return "object".
    } else if (typeof value === "object") {
        return "object";
    //If value is undefined return "undefined".
    } else if (typeof value === "undefined") {
        return "undefined";
    //If value is a type of number return "number".
    } else if (typeof value === "number") {
        return "number";
    //If value is a type of boolean return "boolean".
    } else if (typeof value === "boolean") {
        return "boolean";
    //If value is a type of function return "function".
    } else if (typeof value === "function") {
        return "function";
    } 
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
* 
* 
*/
_.first = function(array, number){
    // Edgecase: If 'array' value is NOT an array return empty square brackets.
    if(!Array.isArray(array)){
        return [];
    // If 'number' is undefined OR not a number return the 1st element in 'array'.
    }else if (number === undefined || isNaN(number)){
        return array[0];
    // Edgecase: If 'number' is greater than the length of the given 'array' return the given 'array'.
    }else if (number > array.length){
        return array;
    // Otherwise return the 1st 'number' items of 'array'.
    }else {
        return array.splice(0, number);
    }
};
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
//If 'array' is not an array condition is met return empty square brackets. 
if (!Array.isArray(array)){
    return [];
//If 'number' is undefined or not a number return the last element in 'array'.
} else if (number === undefined || typeof number !== "number"){
    return array[array.length-1]; // .length will return the last element of any given array.
//If 'number' is negative return empty square bracket.
} if (number === -1) {
    return [];
//Edgecase: If 'number' is greater than the given 'array' return 'array'.
} else if (number > array.length){
    return array;
//Otherwise return the last items of array. 
} else { 
    return array.splice(array.length-number, number);
  
}

};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrence of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurrences of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
//Loop through the given 'array' to search for the 1st occurance of 'value'.
for (var i = 0; i < array.length; i++) {
//If the value is in the array return the index.
    if (array[i] === value) {
        return i;
    } //Question on bchelpdesk edgecase
} //Edgecase: Return -1 if not in the given 'array'.
    return -1;

};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
// Return true if 'array' contains 'value' using ternary operator.
    return array.includes(value) ? true : false;
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, test){
    //check if collection is an array
    if(Array.isArray(collection)){
        // if so loop through the array
        for(var i = 0; i < collection.length; i++){
            // apply function to each index in array
            test(collection[i], i, collection);
    }// check to see if collection is an object
 }else if(typeof collection === "object"){
     // loop through object using for in loop 
      for (var key in collection){
          // apply function to each key in collection
          test(collection[key], key, collection);
      }
 }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
//Create a container to hold the elements.
var ourArray = [];
//Looping through the given array
for (var i = 0; i < array.length; i++) { 
//Remove dups and push the elements into the array. 
    if (_.indexOf(ourArray, array[i]) === -1) {
        ourArray.push(array[i]);
    }
}
//Return the new array.
return ourArray;

};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test){
    var ourArray = [];
    // loop through the array using for each 
  _.each(array, function(element, index, array){
      // apply the test/ function on element, index in the array
      if(test(element, index, array)){
          // push the results to the new array
          ourArray.push(element);
      }
  });
    // return ourArray
    return ourArray;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// Call 'function' for each element in 'array' passing in arguments element, it's index, 'array'.
_.reject = function(array, test){
    // New array for elements that return false.
 var ourArray = [];
 //_.filter loops through array for each element
_.filter(array, function(element, index, array){
    // apply test function on element index in array to strictly equal false.
    if (test(element, index, array) === false){
    //Push elements that are not in the array into ourArray.
        ourArray.push(element);
    }
});
// Return ourArray
return ourArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/**
 * simpler method!!! STUDY
 * ._partition = function(array, function){
 * var newArray = [];
 * 
 * var truthArray = _.filter(array, function);
 * var falseArray = _.reject(arr, function);
 * 
 * newArray.push(truthArray);
 * newArray.push(falseArray);
 * 
 * return newArray;
 *};
*/

// Call 'function' for each element in 'array'
_.partition = function(array, test){
// Create a container to hold new array
var ourSubArray = [];
// Sub array 1 - contains all values the 'function' returned a truthy
var truthyArray = [];
//Sub array 2 - contains all values the 'function' returned a falsy
var falsyArray = [];
// Pass in argruments element, key, 'array'
//Use filter function to return an array containing truthies
_.filter(array, function(element, index, array){
    if (test(element, index, array)) {
truthyArray.push(element);
    }
});
//Use reject function to return an array containing falsies
_.reject(array, function(element, index, array){
    if (test(element, index, array) === false) {
falsyArray.push(element);
    }
});
// Return an array with 2 sub arrays
ourSubArray[0] = truthyArray;
ourSubArray[1] = falsyArray;
return ourSubArray;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
* 
*/

// Call 'function' for each element in 'colection'
_.map = function(collection, test){
    
// Create a container to save returned values of each 'function' parameter call
var ourCalledArray = [];
// Use each to loop through the object to determine if it's an array or object and 
// pass in the array's element at each index.
_.each(collection, function(element, index, collection) {
// Save return value of each 'function' call in the new array using .push.
    ourCalledArray.push(test(element, index, collection));
});
// Return the new array
return ourCalledArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayofobjects, objectkey){
// Use map to return each value in collection
// Return an array containing the property or key for every element element in array.
return _.map(arrayofobjects, function(element, index, collection){
    return element[objectkey];
});

};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the parameters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// Call 'function' for every element of 'collection'
_.every = function (collection, test){
    // create an new array
    var ourArray = [];
// Call with parameters if collection is an object or array its element or value
// it's key or index, and the collection. (use each function)
// Each function will determine if its an object or array, looped through and apply test to each element, the index, of the array.
      _.each(collection,function(element, index, collection){
         if(typeof test !== "function"){
             //test the element
             //checking to see if the element is false
             if(!element){
            //push false elements into new array
            ourArray.push(element);}
         }
        else if(!test(element, index, collection)){
            //push false elements into new array
            ourArray.push(element);
        }
    });
    // is  there anything in the array
    if(ourArray.length > 0){
        return false;
    }
    // }else {
        return true;
    // }
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the parameters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, test) {
     let ourArray = [];
    _.each(collection, function(value, index, collection) {
         if(typeof test !== 'function') {
             if (value) {
                ourArray.push(value);
             }
         } else if (test(value, index, collection)) {
             ourArray.push(value);
         }
 else if(test(value, index, collection)){
            //push false elements into new array
            ourArray.push(value);
        }
    });
    // is  there anything in the array
    if(ourArray.length > 0){
        return true;
    }
    // }else {
        return false;
    // }
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    let prevResult;
    //test if there is a seed
    if (seed !== undefined) {
        //create variable to hold seed value
        prevResult = seed;
        //use each() to gain access to each value in array
        _.each(array, function(e, i, a) {
            //calling a function for every element, passing prevResult, e, & i
            prevResult = test(prevResult, e, i, a);
        });
    } else {
        //if there is no seed    
        //use first element of the array as the seed value
        //create variable to hold seed value
        prevResult = array[0];
        //use for loop to iterate starting at index[1] rather than [0] as each() does
        for (let i = 1; i < array.length; i++) {
            //invoke given function <test>
            //reassign prevResult on each iteration to the result of <test>
            prevResult = test(prevResult, array[i], i, array);
        }
    }
    //last iteration will be returned into prevResult and exist in this parent scope
    //return the value stored in prevResult
    return prevResult;
};



/** _.extend READ REST PARAMETERS
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, obj2, ...newArgs) {
// Using a spread parameter as an argument creates a function that holds all given arguments properties in one.
       Object.assign(obj1, obj2);
// Object.assign will add on the given argument properties of the source (obj2) to the target (obj)
       Object.assign(obj1, ...newArgs);
       // return obj1
       return obj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}


