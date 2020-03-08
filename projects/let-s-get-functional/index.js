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
    
    //Create an array literal to hold the push names 
    var firstLetterArray = [];
    //Create an incrementer
    var count = 0;
    //Map the array and applied the test to each element in an array
    _.map(array, function(element, index, array){
        //Push the name into the container
        firstLetterArray.push(customers[index].name);
    });
//Then map the new array and applie the test to each element
_.map(firstLetterArray, function(element, index, array){
   //If the first letter is the same as the given letter  
   if (firstLetterArray[index][0].toUpperCase() === letter.toUpperCase()){
    //Increment the counter
    count++;
   }
});
//Return the count for the next interation 
return count;

};
 
var friendFirstLetterCount = function(array, customer, letter){
    //I: an array, a customer, a letter
    //O: a number
    
    //Find
    
//Pluck the name value from the given array and assign the results to a new variable 
var namesArray = _.pluck(array, 'name');
//Pluck the firends object from the given array and assign the results to a new variable
var friendsArray = _.pluck(array, 'friends');
//Create an incrementer to hold the count
var acc = 0;
//Iterate the namesarray 
for(var i = 0; i < namesArray.length; i++){
    //If the given customer is the same a iterated customer
    if(customer === namesArray[i]){
        //Assing the iterated customer to the new variable
        var index = i;
    }
    
} 
//this will store the array of a single customer's friends
var specificFriendArray = friendsArray[index];
//iterating to find which friend starts with the same letter then will add one to the accumm variable
for(var i = 0; i < specificFriendArray.length; i++){
    if(letter.toLowerCase === specificFriendArray[i].name.charAt(0) || letter.toLocaleUpperCase() === specificFriendArray[i].name.charAt(0)){
        acc +=1;
    }
}

  //Return the total
return acc; 
};

var friendsCount = function(array, name){
    //I: an array & a name
    //O: array
    
    //Find the customers' names that have a given customer's name in their friends list    
    //Create a array literal to hold customer's names
    var friendsWithCustomer = [];
    //Use reduce to get a single array after evaluating each element
     _.reduce(array,function(seed, customer){
       //Loop through the customer's friend array
        for(var i = 0; i < customer.friends.length; i++){
                //If the given name is the same as the iterated value
                if(name === customer.friends[i].name){
                 //Reassign seed with the customers name
                  seed = customer.name;
                //Push the the seed into the into the array literal
                friendsWithCustomer.push(seed);  
        }
        }
        //Return the array of customer's names
    }); return friendsWithCustomer;
};
var topThreeTags = function(array){
    //I: an array
    //O: an array
    
    //:Find the 3 most common tags among all customers' associated tags
//Assign a new variable to the object
 var popTags = _.reduce(array,(object, customerObj) => {
     //Iterate through each customer object's tag key and run a test on it's values
        _.each(customerObj.tags, function(tagString){
             //Check if the given object tag is undefined 
            if(object[tagString] === undefined){
                 //Assign it 1 if so to mark the first occurence
                object[tagString] = 1;
           //Else increment the tag string
            } else{
                object[tagString]++;
            }
        });
        //Return the object
        return object;
    }, {});
    //Assign a new variable the objects key in an array
   var keysArray = Object.keys(popTags);
   //Assign a new variable the result of sorting the result in the array in descending order
   var sortedArray = keysArray.sort(function(a, b){
       return popTags[b] - popTags[a];
       //Use slice method to remove the first 3 indexes
   }).slice(0,3);
//return the sorted sliced array 
return sortedArray;
 
};

var genderCount = function(array){
    //I: an array
    //O: object
    //C: use .reduce
    
    /* Create a summary of genders, the output should be:
    *
    *{
    *    male: 3,
    *    female: 4,
    *    non-binary: 1
    *}
    */
    //Assign a variable to the result of using the reduce on the given array, gender, and element
    var genderObject = _.reduce(array, (gender, customer) => {
        //If the custoemr's gender is male
        if(customer.gender === "male") {
           //Increment the gender male key value 
            gender.male ++;
           //Else if  the customer's gender is female
        } else if(customer.gender === "female") {
            //Increment the gender female key value
            gender.female ++;
        //    
        } else {
            gender["non-binary"] ++;
        }
        return gender;
        //Seed should be assigned to the an objects key value pairs at 0
    }, { male: 0,
    female: 0,
    "non-binary": 0});

   //Return return the object
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
