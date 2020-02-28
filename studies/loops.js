/*
* LOOPS
*
* Are great for executing a code block repeatedly while a condition is true.
* There are three types of loops we can perform in Javascript and they are 
* While loops, for loops, and for-in loops.
*/

// 1. While loop //
/*
* A while loop checks of an expression is true and then runs the code block as long 
* and it is true. A break statement stops the code from executing. The loop must have two parts.
* These are a condition and an incrementer. 
*/
while (5 > 3) {
    console.log("Clap your hands!");
    i++;
}
// 2. For loop //
/*
* A for loop must have three parts which are:
* Starting point or initialization assigned to a variable called i.
* Stopping point or condition that determines how long we will run the code based
* on how long its condition evaluates to true.
* Increment determines how we will increase or decrease as we loop through the given numbers.
* A for loop reads the declaration and assignment and then the condition set. 
* It determines whether the condition is true and then performs the action inside the curly 
* braces. After that the remaining value is incremented in the final stage of the code.
* This continues until the condition is no longer true.
*/

for (var i = 0; i > 5; i++) {
    console.log(i);
}
// 3. For-in //
/*
* Loops through the properties of an object.
*/

var exampleObject = {
    thisKey: true,
    thatkey: 2,
    yourkey: "Value"
};
for (var key in exampleObject) {
    console.log(key) /* will loop through the unordered list.
* until all of its keys are listed. object[key] will return its value pair.
*/ 
}

// 4. Looping over an Array, forwards and backwards //
/* To loop over an array use a for loop by using its indexes as starting
* and stopping conditions incrementing through the indexes. 
*/

var arrayMe = []; //Create a container for the list.
// Utilize the index of the array to assign i the last index of the arrayMe Array. Using the .length-1 property.
for (var i = arrayMe.length -1; i >= 0; i--) { //Set the stopping condition to 0. The first and final index decrementing by subtracting one. 
    console.log(arrayMe[i]); //Prints arrayMe indexes to the console.
}

var arrayYou = []; //Create a container for the list.
//Utilize the index of 0 to assign i the first index of the array. 
for (var i = 0; i <= arrayMe.length -1; i++) { //Set the stopping condition to the final and last index of the array. Incrementing by 1.
    console.log(arrayYou[i]); //Prints arrayYou indexes to the console.
}
// 5. Loop over an Object //
/* 
*Requires a for-in loop. For-in loop is the only way to loop through an object without converting it to an array.
*/
var exampleObject = {
    thisKey: true,
    thatkey: 2,
    yourkey: "Value"
};
for (var key in exampleObject) {
    console.log(key)
    } /* will loop through the unordered list. 
* until all of its keys are listed. object[key] will return its value pair.
*/ 
