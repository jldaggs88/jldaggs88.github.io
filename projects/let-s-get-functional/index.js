// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jldaggs88');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jldaggs88.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //I: an array
    //O: number
    //C: use _.filter
    
    // Get access to each customer object
    return _.filter(array, function(customerObj, index, array){
        //checking to see if my customer is a mle using the gender key
    return customerObj.gender === "male";
    }).length; // chain on dot length to get # of male customers
    
};
    
var femaleCount = function(array) {
    //I: an array
    //O: number
    //C: use _.reduce
    
    //test for gender key === "female"
    //start seed at 0 to keep track of count
    //if gender === female, add 1 to seed value
    let func = function(seed, element, i, array) {
        if (array[i].gender === "female") {
            seed += 1;
        }
    //return seed
        return seed;
    };
    // return the reduce function call passing the arguments array, func, and 0.
    return _.reduce(array, func, 0);
};

var oldestCustomer = function(array) {
    //I: an array
    //O: a string
    
    //Find the oldest customer's name
    //Declare a variable and assign to 0.
    let age = 0;
    // Declare a variable to hold the oldest customer's name.
    let name;
    //Declare test to run an action on the e,i,a
    let test = function(element, i, collection) {
    //If the iterated customer's age is greater than the current age assignment 
    //reassign the customer's age to the age variable
    //also assign the name variable the name of the iterated customer
        if (array[i].age > age) {
            age = array[i].age;
            name = array[i].name;
        }
    };
    // The each function will apply an action to each value of a collection.
    _.each(array, test);
    // Return the customer's name
    return name;
};

var youngestCustomer = function(array) {
    //I: an array
    //O: a string
    
    //Find the youngest customer's name
    //Declare a variable and assign to 100.
    let age = 100;
    // Declare a variable to hold the oldest customer's name.
    let name;
    //Declare test to run an action on the e,i,a
    let test = function(element, i, collection) {
    //If the iterated customer's age is less than the current age assignment 
    //reassign the customer's age to the age variable
    //also assign the name variable the name of the iterated customer
        if (array[i].age < age) {
            age = array[i].age;
            name = array[i].name;
        }
    };
    // The each function will apply an action to each value of a collection.
    _.each(array, test);
    // Return the customer's name
    return name;
};

  

var averageBalance = function(array) {
    let balances = _.pluck(array, "balance");
    let test = function(seed, element, i, array) {
        seed += Number(array[i].balance.replace(/\$|,/g, ''));
        return seed;
    };
    let totalBalance = _.reduce(array, test, 0);
    let avgBalance = totalBalance / balances.length;
    return avgBalance;
};


var firstLetterCount = function(array, letter) {
    let test = function(e, i, array) {
         return array[i].name[0].toLowerCase() === letter.toLowerCase();
    };
    return _.filter(array, test).length;
};


var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
