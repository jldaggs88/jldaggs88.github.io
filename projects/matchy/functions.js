/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals, name) { // Function called search with parameters animals(array) and name(string).
    for (var i = 0; i < animals.length; i++) { // For loop will iterate through the animals array until it reaches the last index or length.
        if (name.toLowerCase() === animals[i].name.toLowerCase()) { // if the first condition is met in the if else chain it will 
        // return the animal at each the given index at each iteration.
            return animals[i]; //
        }
    } return null; // If else return to represent the absence of a value
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement) { // Array of animal, name of animal to perform the search, object represents the replacement of an animal
// Three parameters animals ()array, name(key/value), replacement (object). 
for (var i = 0; i < animals.length; i++) { // Use a for loop to iterate through the array to determine if any of the elements match the replacement element.
    if (animals[i].name === name) { // A condtional statment will perform .splice when the "name" in the array strictly equals name our argument.
        animals.splice(i, 1, replacement);
    }
}

}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) { // Create function called remove with a signature of two parameters
      // For loops are used to loop arrays
 for (var i = 0; i <= animals.length; i++) { // searching through name string parameter and animals is an array
      // Use strict comparision to determine if the name is in the animal array.
     if (name === animals[i].name) { // If statement to perform actions based on the condition being met.
        return animals.shift(i, 1); // Action to perform is shift the element off the front and replacing it with our name argument.
     } else {
        return i; // If the name doesn't exist return index.
     }
 }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) { // Our two parameters array called animals; an object called animal
// For loop will iterate through the animals array to check the array elements to determine if the name value is the same as the argument.
//var animals1 = [];
for (var i = 0; i < animals.length; i++) { // The for loop will increment through the array by one. 

if (!(animal.name.length > 0) || !(animal.species.length > 0) || (animals[i].name === animal.name))
return;
}
{ // If conditional statment will check animals array and evaluate the length 
// id more than zero for the species and name.
          animals.push(animal);

} // Getting error when loading the Mocha spec runner. Tested the code and it is not an infinite loop.
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}