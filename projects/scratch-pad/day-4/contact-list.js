// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {//factory function - any function that can return an object
// makeContact function take three parameters 
//return a contact object

    var contactObject = { // Create an object with key pairs
        id: id, //Reference to existing key values pairs
        nameFirst: nameFirst, 
        nameLast: nameLast
    };
    return contactObject; // Return the contactObject
}

function makeContactList() {
   
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
   
    return {
        // we implemented the length api for you //
        length: function() { //Create a function that returns the # of contacts within the list
            return contacts.length; // .length will return the total number of elements in the contact list
           
        },
        addContact: function(obj) { // Created a function with the parameter object to later pass in the contactObject
            contacts.push(obj); // Push the contactObject onto the contacts array.
        },
        findContact: function(fullName) { // Returns the contact object as a string 
            for (var i = 0; i < contacts.length; i++){ // For loop will loop through all contacts
            if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                return contacts[i];
            } 
                return undefined; //Returns undefined if condition is not met.
            }
            
        },

        removeContact: function(contact) { // Created a for-loop that will iterate through the contacts
        for(var i = 0; i < contacts.length; i++) {
           if(contacts[i] === contact) { //If statment to splice if conditions are met
                return contacts.splice(i, 1); // .splice(value, index) will remove the vale for the index
           }
        }
        
        },
        find: function(fullName) { // For loop created to interate through the contacts.
        for(var i = 0; i < contacts.length; i++) {
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { // Fullname is strictly equal to contact first and last name strings.
                return contacts[i];
            }
        }
        
        },
        
        printAllContactNames: function() { 
                var wholeList = ""; // An empty string create to house contacts as strings.
        for (var i = 0; i < contacts.length; i++){ // For-loop will iterate through the contact list
        
        var fullName = contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]; //fullName assigned to the contacts first and last name as a string.
        
        if (i === contacts.length - 1 ){ 
            wholeList += fullName;
               
        } else {
            wholeList += fullName + '\n';
        }
        
        }  
       
            return wholeList;
        }
        
        };   
    
    
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
