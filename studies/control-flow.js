/** 
 * CONTROL FLOW:
 * 
 * Control flow or error handling is just like it sounds. It is controlling how the code
 * flows and eliminating user input errors. Statements are used to take action
 * based on certains conditions being met. These statements are called conditional
 * and switch statements. 
 * 
 */

// 1. If Statement //

/**
*An if statement is a conditional statement design to execute a block of code if
* the statement is true. If the statement is not true a second condition is check
* for a true condition and so on. If statements can be nested inside other if statements
* as a code block to run. Conditionals only run through the block of code until it finds
* a true statement. Else if and else statements are optional when creating an if statement
* but a great way to prevent user error.
* 
* To write an if, else if and else statement start with the keyword 'if' followed by
* parenthesis. Inside of the parenthesis is where we write the condition that will
* evaluate to true or false. After the parenthesis is a set of curly braces. Inside
* of the curly braces is the code block or action to be performed if the condition 
* evaluates to true. An else statement must follow an if statement when being utilized.
* The keyword 'else if' follows the closing curly bracket of the 'if' statement and 
* followed by parenthesis that contain a condition. After the parenthesis is curly braces
* that contain the action to be taken if the condition evaluates to true. The final condition
* is another statement that follows the ending curly bracket. The 'else' keyword followed 
* by the action to take inside of curly brackets. This code block will run if all other conditions
* fail.
*/

// 2. Else-if //
/**
* Is the programming of a new condition to test against. This line of code will be 
* evaluated only if the conditional statements before it evaluated to false and it's condition
* is met. The if else chain can contain as many else if statements as necessary. 
*/
var twoOfYou = false;

if (twoOfYou === true) { // Evaluates to false so the next statement's conditions are checked.
    return "Wrong!";
} else if (twoOfYou === false) { // Evaluates to true.
    return "Right!"; // Returned to the console.log.
}
// 3. Else //
/**
* Else statements are the final link in the if/else chain. If none of the previous conditions 
* If none of the previous conditions are met run the code block for the else statement. 
* There can be only one else statements inside one code block and it must end the
* block. It is not necessary to set a condition. */

var twoOfUs = true; // Variable teoOfUs is set to a boolean value of true. 

if (twoOfUs === true) { // If twoOfUs strictly equals true return the string "Happy"
    return "Happy";
} else if (twoOfUs === false) { //Else if twoOfUs is strictly equal to false return the string "Sad"
    return "Sad";
} else {
    return "Neutral"; // Else if the twoOfUs was anything other than true or false this block would print "Neutral"
}

// 4. Switch //
 /**
 *Switch statements are used to run a code block based on the truth of a 
 * condition. Only the first true statement will evaluate and run its given code block.
 * A switch statement condition is called an expression. The expression is compared to 
 * each case. When they align, the case code is executed.
 * 
 * A switch statement should be used over a if else chain when there are just fixed 
 * date values to evaluate. If else chains are best used on boolean values that evaluate
 * to true or false. 
 * 
 * To write an switch statement begin with the keyword "switch" followed by the conditional
 * statement inside of parenthesis followed by curly brackets. Inside the curly brackets 
 * We will list each case we want to evaluate paired with a colon and alert statement and a semicolon.
 * Each alert is followed by a break. The final case is called default. The Defaults action will
 * be performed if all other conditions fail. Then the code is exited.
 * 
 */
 
 var y = 1; // Variable y is assigned to 1.
 
 switch (y) { 
     case 3: // When y is equal to 3 the console will print "Three"
         alert ("Three"); 
         break; // Exits the block and enters the next
     case 2: //When y is equal to 2 the console will print "Two"
         alert ("Two");
         break; //Exits the block and enters the next 
     default: // Ending statement to return "One" to the console if other conditions are not met.
         alert ("One");
 }
