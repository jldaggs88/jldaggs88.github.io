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
                            // Work Save and Previewed


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];            // A variable named `noises` and assigned to an empty array.
noises[0] = 'clicks';       // Bracket notation to give `noises` it's first element. A string of the animal sound.
noises.push("whistles");    // Using an array function add another noise to the end of `noises`.
noises.unshift("screaming");// Add an element to `noises` using .unshift to add to the front of the array.
noises.push("loudness");   

noises[animal.noises.length] = "crying"; // Use bracket notation to add another element to the end of `noises`.
console.log(noises.length); // Returns the length of `noises`
console.log(noises.length-1);//Returns the last element in `noises` again without hard coding the index.
console.log(noises);        // Returns the whole array.
//Looks Right!

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; // Use bracket notation to assign the `noises` property on `animal` to our new `noises` array.

animal.noises.push("ooos and ahhhs"); // Use any object.key to push another noise to the `noises` property on `animal`.

console.log(animal); // Returns animal object
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
var animals = [];  // Create a variable named `animals` and assign it to an empty array.

animals.push(animal); // .push array method to add animals object to the array.

console.log(animals); // Returns animals array

var duck = { // Create a variable called duck assigned to an object with data
species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck); // Push duck into animals array.
console.log(animals); // Returns animals array updates with duck key/values pairs

var frog = { // Create two more species with key/value pairs 
species: 'frog', name: 'Tony', noises: ['Ribbet', 'other creepy noises', 'sneeze', 'woosh']
};

var dog = {
species: 'dog', name: 'Greg', noises: ['growl', 'cries', 'wheezing', 'barks']
};

animals.push(frog, dog);

console.log(animals); // Looks right!
console.log(animals.length); //Looks right!

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// The instructions specific to create a list which is another name for an array.
var friends = []; // Variable called friends

function getRandom(animals) {
    for (var i = 0; i < animals.length; i ++) {
        return Math.floor(Math.random(animals.length));
    }
}

friends.push(frog["name"]);
animals[getRandom(animals)].friends = friends;
console.log(friends); //

console.log(animals); //Return frog object key with the friends list property
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
