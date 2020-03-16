// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //Return a number 
  //Return factorial for non-negative integers
  //Base Case: Should return null for negative integers 
  if(n < 0){
    return null;
    //If is equal to 0 return 1
  } else if (n === 0){
    return 1;
  } else {
    //Recursive call: Multiply n by the n-1 subtract 1 to decrement
    return (n *factorial(n-1));
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //Create an empty array to maintain purity
  //Base Case: Should return 0 for an empty array
  if (array.length === 0){
    return 0;
    //Recursive Call: return the array zeroth index added to the array 
    //remainding characters slicing of the 1 index each call
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //Base Case: If given number is less than 0 return the product of the number and -1.
  if (n < 0) {
    return isEven(n * -1);
    //Else if the number is equal to 0 return true
  } else if (n == 0) {
    return true;
    //Else if the number is equal to 1 return false
  } else if (n == 1) {
    return false;
  }
    //Recursive Call: Subtract 2 for the number each iteration of the call
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //Base Case: If number is equal to 0 return 0
  if (n === 0) {
    return 0;
  //Else if number is less than 0
  } else if (n < 0) {
    //Return the sum of the negative number than the negative number plus 1
    return n + 1 + sumBelow(n + 1);
  }
  //Recursive Call: Return the sum of the number minus 1 and the number minus 1
  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //Base Case: If no integers in range return an empty array
  if (x === y || x - y === 1 || y - x === 1) {
    return [];
  //Recursive Call When x is less than or equal to y push the value -1 into the results array
  } else if (x <= y) {
    let result = range(x, y - 1);
    result.push(y - 1);
    //Return the array
    return result;
  //Recursive Call When x is greater than or equal to y push the value +1 into the results array
  } else if (x >= y) {
    let result = range(x, y + 1);
    result.push(y + 1);
    //Return the array
    return result;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
  //BaseCase :Stop when exponent equals zeroth by returning 1 (number will be the same)
var exponent = function(base, exp) {
  if (exp === 0){
    return 1;
    //Recursive call: Else if the exp is negtive return the exp plus 1 divided by the base
  } else if (exp < 0){
    return exponent(base, exp + 1) / base;
} 
// Else the exponent is positive return the exp minus 1 multiplied by the base
return base * exponent(base, exp -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n){
  // BaseCase: If the given number is 1 return true
  if (n === 1){
    return true;
  } //If the given number is zero or its remainder when divided two is 1 return false
  if (n === 0 || n % 2 === 1){
    return false;
    }
  // Recursive Call: divide the given numer by 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string and reverses it.
var reverse = function(string) {
  // Return a string if the given value is a string. 
  //Recursive call: concat the string at index 1 to index 0 and so on
   return string === '' ? '' : reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //Assign the results of separating the given string, muting the case and spaces 
  string = string.toLowerCase().split(' ').join('');
  //BaseCase: If the string is zero or if there is only one element return true
if(string.length === 0 || string.length === 1){
return true;
//Recursive call: Else if the string at the zeroth index is the same as the last element
} else if(string[0] === string[string.length - 1]) {
return palindrome(string.slice(1, string.length - 1));
}//Return false for non palindromes
return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

//NO PSEUDOCODE INSIDE!!!!
// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
  //BaseCase: If there are no numbers in the range end the call
 //Recursive call: if y is less than 0 add -x to the resulting number
    //Else y is greater than 0 add x to the resulting number

var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //BaseCase: If the given strings lengths are 0 return true
  if(str1.length === 0 && str2.length === 0){
        return true;
        //Recursive call: if the strings zeroth indexes are the same call the function slicing the first element and so on
    } else if(str1[0] === str2[0]){
        return compareStr(str1.slice(1), str2.slice(1))
    } //Otherwise return false
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //Create and empty container
   var newArray = [];
   //BaseCase: if the strings length is 0 return the array
    if(str.length === 0) {
        return newArray;
    }
    //Recursive Call: Else push the string zeroth index into the array 
    newArray.push(str[0]);
    //Then concat the array to the results of calling the function slicing through the string 
    newArray = newArray.concat(createArray(str.slice(1)));
    //Return the arrray
    return newArray;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //Create an array
  var reversed = [];
  //BaseCase: if the length of the array is 0  return the array
  if(array.length === 0) {
    return reversed;
  }//Recursive call: Else push the array with the last element removed
  reversed.push(array.pop());
  //Then reassign the array the array with the new array
  reversed = reversed.concat(reverseArr(array.slice(0)));
  return reversed;

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //Create an empty array
  let array = [];
  //BaseCase: If the given length is equal to 0 return the array 
  if(length === 0) {
  return array;
  }
  //Recursive Call: Else push value into the array and return its value and length
  array.push(value);
  return array.concat(buildList(value, length -1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //BaseCase: If the array has zero length return 0
 if(array.length === 0) {
    return 0;
   }//Recursive call: if Array index equals the value add it to the call slicing the array each call
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //BaseCase: If the array is 1 return the function call
 if(array.length === 1) {
  return callback(array);
  }//Recursive call: Else concat the array's element at the zero index slicing by 1 each iteration 
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //Assert that the first two numbers are 0 and 1
  //BaseCase: If number is less than 0 return null
  if(n < 0) {
    return null;
    //Return 1 if the number is 1
    } else if(n === 1) {
return 1;
}//Recursive Call: Return the function call subtracting 1 from the number added to the function subtracting 2 for the given number
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //Create a empt array to hold pushed elements
   let result = [];
   //BaseCase: if the length of the string is 0 return the array
    if(input.length === 0) {
        return result;
    }//Recursive call: Else push the zeroth index of the string and capitalizing the string  
    result.push(input[0].toUpperCase());
    //Reassign the results array concatanated to the string slicing the first index each iteration
    result = result.concat(capitalizeWords(input.slice(1)));
    //Return the string
    return result;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //Base Case: If the array has no values return an empty array
  if(array.length === 0) {
    return [];
  }
  //Recursive call: Empty the array then add the elements back with the zeroth index capitalized
  return [array[0][0].toUpperCase().concat(array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  //Assign a variable an array like object or an object
  let tallies = Array.from(arguments)[1] || {};
  //Base Case: If the string doesn't exist return the object
    if(str.length === 0) {
        return tallies;
    }//If the element's index doesn't exist assign it 1
    if(!tallies[str[0]]) {
        tallies[str[0]] = 1;
    } else
     {//Else return the element's index incremented
        tallies[str[0]]++;
    }//Recursive Call: Iterate through the string until it contains no elements then go backwards
    return letterTally(str.slice(1), tallies);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //Base Case: If the list is empty return an empty array
   if (list.length === 0) {
    return [];
  }
 //Recursive Case: If the array zeroth index is the same as the first index call the function removing the 1 index
  if (list[0] === list[1]) {
    return compress(list.slice(1));
 } else {
   //Else call the arrays first element concatnated to the rest of the array
   return[list[0]].concat(compress(list.slice(1)));

 
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
//Base Case: if the length is 0 return the given array
   if (array.length === 0) {
     return array;
   }
   //If the Called Result index is 0 and the arrays index is 0 return a call removing the latter 0
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
      //Recursive Call: Return add the remainding values and repeat
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //Base Case: if the array's length is 0 return the array
  if (array.length === 0) {
    return array;
  }
      //If the element at the zero index is less than 0 change to positive 
    if(array[0] < 0) {
      array[0] = -array[0];
    }
          //If the first index is greater than 0 change to negative 
    if(array[1] > 0) {
      array[1] = -array[1];
      
    }//Recursive Call: slice through the array checking each element and concating the results to the array
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
  var array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str.length === 0) {
    return '';
    // returns empty string if the string input is empty from using slice
  } else if (Number(str[0])) {
    return `${array[str[0]]}`.concat(numToText(str.slice(1)));
    // if the value is a number, the coresponding number is concatenated and recursion continues
  } else {
    return `${str[0]}`.concat(numToText(str.slice(1)));
    // otherwise the recursion continues without changing the current value.
  }
  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
