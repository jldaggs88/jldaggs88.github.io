/*
*CONTROL FLOW
* Control flow is the order functions and statements are executed. 
* In Javascript code is read from the very top.  
*/

// 1. IF //
/* 
* If is the first keyword in a line of code or chain in the when beginning and if/else
* statement. If the conditon set evaluates to true the code block is associated
* with it is ran. An if statement can function without a else if our else statment. 
* There cannot be more than one if statement in a block of code.
*/

var tree = "tall";[]

if (tree === "tall") {
    return "Tall Tree";
}   // Returns a boolean of true. 

// 2. Else-if //
/*
* Is the programming of a new condition to test against. This line of code will be 
* evaluated only if the conditional statements before it evaluated to false and it's condition
* is met. The if else chain can contain as many else if statements as neccessary. 
*/
var twoOfYou = false;

if (twoOfYou === true) { // Evaulates to false so the next statement's conditions are checked.
    return "Wrong!"
} else if (twoOfYou === false) { // Evaluates to true.
    return "Right!" // Returned to the console.log.
}
// 3. Else //
/*
* Else statement are the final link in the if/else chain. If none of the previous conditons 
* If none of the previous conditions are met run the code block for the else statement. 
* It is not nessecary to set a condition or  */
var twoOfUs = true;

if (twoOfUs === true) {
    return "Happy";
} else if (twoOfUs === false) {
    return "Sad";
} 

// 4. Switch //
 /*
 *Switch statements are used to run a code block based on the truth of a 
 * condtion. Only the first true statement will evauate and run its given code block.
 * A switch statments condition is called a expression. The expression is compared to 
 * each case. When they align, the cases code is executed.
 */
 var y = 1;
 
 switch (y) {
     case 3: 
         alert ("Three");
         break;
     case 2:
         alert ("Two");
         break;
     default:
         alert ("One");
 }