/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};            // Create a variable named 'animal' assigned to an empty object.
animal.species = "dolphin"; // Using dot notation to give animal a property named species with a value of any species.
animal['name'] = "Dolly";   // Using the bracket notation give 'animal' a property of the animals name.
animal.noises = [];         // Dot notation is the best way to give `animal` a **property** called `noises` with a value of empty array.
console.log(animal);        // Prints `animal` Object to the console;
                            //Work Save and Previewed


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];            // A variable named `noises` and assigned to an empty array.
noises[0] = 'clicks';       // Bracket notation to give `noises` it's first element. A string of the animal sound.
noises.push("whistles"); 
noises.unshift("screaming");
noises.push("loudness");
noises[3] = "crying";
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push("ooos and ahhhs");
console.log(animal);
// Looks Right!

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *The best way to access an objects properties is using dot notations. You can
 *also use bracket notation with the key surrounded by quotations. Also a for-in loop
 *accesses the key/value pairs in an object.
 * 2. What are the different ways of accessing elements on arrays?
 *To access the different elements in an array use bracket notations. 
 * Other array accessing process are push, pop, shift, unshift, splice, join, and split.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; 
animals.push(animal);
console.log(animals);

var duck = {
species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck); //Push duck into animals array.
console.log(animals); //

var frog = {
species: 'frog', name: 'Tony', noises: ['Ribbet', 'other creepy noises', 'sneeze', 'woosh']
};

var dog = {
species: 'dog', name: 'Greg', noises: ['growl', 'cries', 'wheezing', 'barks']
};

animals.push(frog, dog);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// The instructions specific to create a list which is another name for an array.
var friends = [];

// function getRandom(array) {
//     return array[]
// }


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
