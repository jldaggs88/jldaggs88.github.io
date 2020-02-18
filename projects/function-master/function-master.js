//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { // Create a function named objectValues that takes 1 parameter 
// called object.
return Object.values(object); // Use the Object.values(object) method to
// return the objects values in an array. 

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { // Created a function called keysToString with 
// one parameter object.

   var passInStr = Object.keys(object); // declared a variable to assign the array of 
   // the objects keys as an array. Used the Object.keys() method.
   
  return passInStr.join(" "); // .join will convert the array to a string by include
  // quotations in the parenthesis.
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { // Created a function called valuesToString with a parameter object
    var valuesArray = []; // Created an empty container to hold the values. 
// For-in loop lets us iterate through an objects key/value pairs.
    for (var key in object) {
        if (typeof object[key] === "string") { // If conditions set to 
       // determine is an object's key is a string. If it is 
       // we will push the string into the valuesArray.
            valuesArray.push(object[key]);
        }
    }
  return valuesArray.join(" "); // In the function body we will return the string joined together.
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { // Function that takes one parameter called collection (array)
    if (Array.isArray(collection) === true) { // If statement to check if the argument is an array before 
    // check if its an object.
        return 'array'; // print 'array' if argument is an array.
        // the else condition will run its coldblock if the collection argument is strictly equal to 
        // "[object Object]" an object.
    } else if (Object.prototype.toString.call(collection)  === "[object Object]") {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// The first index of agrument will be capitalized and concat it to string starting with
// the second character/ first index.
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Created a container to hold and split the new string.
   var splitString = string.split(" ");
   // Created a container to hold the pushed elements.
   var pushedArray = [];
   // For looping through the array incrementing by 1
   for (var i = 0; i < splitString.length; i++){
       // As long as i is less than the length of the string we will push each element 
       // into the pushed array.
       pushedArray.push(splitString[i][0].toUpperCase() + splitString[i].substring(1));
       
   }
   return pushedArray.join(" "); // Finally the arugment will return as a string.
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // Create a container that will hold our message. 
  var string = "Welcome " + capitalizeWord(object.name) + "!";  // Concat a string to object.name and a "!" 
  // capitalizeWord() method to capitalize the first letter in the key value.
  return string; // When call the agrument will print "Welcome Name!"
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { 
var ourString = capitalizeWord(object.name) + (" is a " ) + capitalizeWord(object.species); // Created a container that holds
// the object key/vaue name capitailized concatanated to a string and the object key/value speices.
return ourString; // 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   //condition statement to check if object has noises array
    if (Array.isArray(object.noises) === true && object.noises.length > 0) {
    //if array exists, return noise array as string separated by spaces 
    return object.noises.join(" ");
    }
    //if no noises array, return string "there are no noises"
    else {
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { 

if (string.indexOf(word) >= 0) { // Conditional statement will determine if arugment word is at an index within the string
    return true; // if it exist it evaluates to true.
} else { 
    return false; // else if evaluate to false.
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    // Push method on the array within the object
    object.friends.push(name);
    // Return the object 
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

    //create if statement to check that object has a friends property
    if (object.friends !== undefined) {
        //if object has friends property, check if name exists in friends array
        //use indexOf method to return index of name, if it exists
        //checking that indexOf result is equal to or greater than 0 
        //this will return true if friend exists, false if not
        return object.friends.indexOf(name) >= 0;
    //if there is no friends property in object, return false
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

///STUDYING MEEEEE SO HARDDDDD!!!!!!!!!

function nonFriends(name, array) {
    //create notFriends array to hold the list of non-friends
    let notFriends = [];
    //loop through given array
    for (let i = 0; i < array.length; i++) {
        //define test with value of isFriend, will hold boolean value
        //false if not friends with <name>
        let test = isFriend(name, array[i]);
        //check that test is false and ensure that name of that object is not the same as the <name> parameter
        if (test === false && name !== array[i].name) {
            //if passes, then push the non-friend into the notFriends array
            notFriends.push(array[i].name);
        }
    }
    //return the array of non-friends
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//Update or create a property key on object with new value
 object[key] = value;
 
// Return the new object 
return object;


}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// Remove any properties on an given object that are listed in array 
// Loop through each element in the list.
   for(var i = 0; i < array.length; i++){
       // Loop through the given object
        for(var key in object){
            // If the array element is strictly equal to the object key
            if(array[i] === key) {
                //Delete the object key
                delete object[key];
            }
        }
    }return object; // Return the object with the key.
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
// Create an array using array.from(). Creating a new set since elements can only appear once.
return Array.from(new Set (array));
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}