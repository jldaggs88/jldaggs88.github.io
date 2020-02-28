// 2. Else-if //
/*
* Is the programming of a new condition to test against. This line of code will be 
* evaluated only if the conditional statements before it evaluated to false and it's condition
* is met. The if else chain can contain as many else if statements as necessary. 
*/
var twoOfYou = false;

if (twoOfYou === true) { // Evaluates to false so the next statement's conditions are checked.
    return "Wrong!"
} else if (twoOfYou === false) { // Evaluates to true.
    return "Right!" // Returned to the console.log.
}
// 3. Else //
/*
* Else statements are the final link in the if/else chain. If none of the previous conditions 
* If none of the previous conditions are met run the code block for the else statement. 
* It is not necessary to set a condition or  */
var twoOfUs = true;

if (twoOfUs === true) {
    return "Happy";
} else if (twoOfUs === false) {
    return "Sad";
} 

// 4. Switch //
 /*
 *Switch statements are used to run a code block based on the truth of a 
 * condition. Only the first true statement will evaluate and run its given code block.
 * A switch statement condition is called an expression. The expression is compared to 
 * each case. When they align, the case code is executed.
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
