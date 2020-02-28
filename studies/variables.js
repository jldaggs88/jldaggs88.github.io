/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. DECLARATION //
var myName;
/*
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything. It is the introduction of a named container into a scope. Its name or identifier must be unique, short and descriptive.
*Declarations can be done anywhere! Do not declare without special keywords to avoid re-assigning the wrong thing.
*/
console.log(myName); // prints => undefined *it exist but is just holding memory for an assignment at a later time

// 2. ASSIGNMENT & INITIALIZATION //
myName = 'jessa';
/*
*
*At the initialization or assignment phase gives the container a value. Assign using (=) the assignment operator.
* The assigned value can be any single datatype. In order to be used for action in the code the container must be assigned. 
*/
console.log(myName); // prints => john *now that we have initialized the variable a console.log statement prints what's inside the container

// 3. RE-ASSIGNMENT //
myName = 'john'; 
/*
*Re-assignment phase takes an existing variable and it's value and gives said variable a new value. 
*Reassigned variables can be difficult to identify when working with large amounts of code so use it wisely. Include strong pseudocode. 
*
*/
console.log(myName); // prints => bob *now that we have re-assigned the variable myName "john" will be replaced by "bob"

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1; //variable now contains a number
var myVariable = true; //variable now contains a boolean statement
myVariable = "someString"; //variable now contains a string

/**
* var, let, const:
* 
*Variables can be assigned and declared using the keywords var, let, or const.
*Assign variables with the keyword var in the global or local scope.
*Assign variables with the keyword let in the block scope.
*Assign variables with the keyword const in the block scope. 
* 
*/

// 1. var //
var myName;
/*
 *This keyword can be redeclared and reassigned. Variable declared with var are hoisted to the to the zero-th line.
 *The declaration process takes place before any line of code is run. 
 *A best practice is to declare a variable at the top of their scope to make determining where the variable is used is easy.
 * 
 */

// 2. let //
let yourName;
/* 
*This keyword can be reassigned or updated but not declared. A reference error will occur if attempting to utilize
*the let variable before it is initialized. 
*/

// 3. const //
const theirNames = 0;
/*
*This keyword cannot be reassigned, redeclare, or hoisted. The variable must be assigned
*a value it's declared. When assigned to reference can change the properties of an object.
*When assigned to a value it cannot be changed.
*/

// 4. Hoisting //
/*
*Hoisting is the process of moving a declaration to the top of its scope-able limits.
*ONLY the declaration will be moved to the zeroth line.
*/
console.log(appleType);
var appleType = "Apple Crisp"; // The console will print "Apple Crisp" when referencing the appleType.

