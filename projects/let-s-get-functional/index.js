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

var femaleCount = function(array, number) {
    //i: an array
    //o: number
    //c: use _.reduce
    //test for gender key === "female"
    //start seed at 0 to keep track of count
    //if gender === female, add 1 to seed value
var totalFemme = 0;
    _.reduce(array, function(seed, element){
        if(element.gender === 'female'){
            return totalFemme = seed +1;
    }} , 0);
     return totalFemme;
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
    //I: an array
    //O: a number

    // Find the average balance of all customers
    // Assign a varibale the pluck call passing in the array and "balance"
    let balances = _.pluck(array, "balance");
    // Set test to a function passing in the seed, e, i, & a.
    let test = function(seed, element, i) {
        //Add the balance replacing the commas and converting to a number.
        seed += Number(array[i].balance.replace(/\$|,/g, ''));
        // Return the seed
        return seed;
    };
    // Set a varibale to the result of the reduce function call
    let totalBalance = _.reduce(array, test, 0);
    // Set a variable totalBalance divided by the length of the array.
    let avgBalance = totalBalance / balances.length;
    // Return the avgBalance
    return avgBalance;
};

var firstLetterCount = function(array, letter){
    //I: an array & a letter
    //O: a number
    
    //Find how many customer's names begin with a given letter
    //with all true elements.
    
    //Declare the test function to return the zero index of the name name 
    var firstLetterArray = [];
    var count = 0;


    _.map(array, function(element, index, array){
        firstLetterArray.push(customers[index].name);
    });
_.map(firstLetterArray, function(element, index, array){
   if (firstLetterArray[index][0].toUpperCase() === letter.toUpperCase()){
count++;

   }
});
return count;

};
 
var friendFirstLetterCount;

var friendsCount;
var topThreeTags = function(array){
    //I: an array
    //O: an array
    var popTags = [];
    console.log(popTags);
    //Find three top tags
    let test = function (e){
    //Push the tags into the popTags array
        popTags.push(e.tags);
    };
    // Use map to iterate and return the 
    _.map(array, test);
    
    //Return an array 
    return popTags;
    
    

};

var genderCount = function(array){

    var genderObject = _.reduce(array, (genderLikeObject, customerElement) => {
        if(customerElement.gender === "male") {
           
            genderLikeObject.male ++;
           
        } else if(customerElement.gender === "female") {
            genderLikeObject.female ++;
        } else {
            genderLikeObject.transgender ++;
        }
        return genderLikeObject;
    }, { male: 0,
    female: 0,
    transgender: 0});

   
return genderObject;
};

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
