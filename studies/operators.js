/**
 * OPERATORS
 * Operators perform actions on values in Javascript. They are used to assign,
 * compare, and perform arithmetic on values such as adding, subtracting and multiplying.
 */
 
 // 1. Assignment Operators //
 // The assignment operator assigns a value to a value.
 // They are as follows: 
 // = Assignment operator assigns a value to a value.
 var assignMe = 3;
 // += Adds to value to an assigned value.
 var y = 1;
 y += 2; // prints 3 to the console.
 // -= Subtracts from an assigned value.
 var t = 3;
 t -= 1; // prints 2 to the console.
 // *= Multiples the assigned value. 
 var twoMe = 5
 twoMe *= 2; // prints 10 to the console.
 // /= Divides the assigned value.
 var fromYou = 10;
 fromYou /= 2; // prints 5 to the console. 
 // %= Find the remainder of the first value.

  
 // 2. Arithmetic Operators //
 //The arithmetic operators perform arithmetic between values.
 
 //They are as follows:
 // Addition + 
 var more = 3 + 2; // Produces the sum of the values.
 // Subtraction -
 var less = 3 - 2; // Produces the difference of the values.
 // Multiplication *
 var multi = 3 * 2; // Produces the product of the values.
 // Division //
 var divide = 3 / 2; // Divides the values.
 // Division Remainder 
 var remain = 3 % 2; // Returns the remainder of the first value when divided by the second.
 // Increment ++
 var increaseByOne = 1; //Add one to the value.
 increaseByOne++;
 // Decrement --; Subtract 1 from the value.
 var decreseByOne = 1;
 decreseByOne--;
 
 // 3. Comparison Operator //
 /* Comparison Operators are used to determine if there is a difference between
 *variables or if variables are equal.
 */
 // They are as follows:
 // ==  Equal to
 var far = 3;
 far == "3"; // Will Evaluate to true based on value not data type.
 // === Strictly equal to
 var too = 4;
 too === 4; // Evaluates to true
 // !=  Not equal
 var two = 2;
 two != 2; // Evaluates to false
 // !== Not strictly equal to
 var four = 4;
 four !== "4"; // Evaluates to true
 // >   Greater than
 var moreThan = 3 > 2; // Evaluates to true
 // <   Less than
 var lessThan = 5 < 2; // Evaluates to false
 // >=  Greater than or equal to
 var greaterEqual = 4 >= 2; // Evaluates to true
 // <=  Less than or equal to
 var lesserEqual = 50 <= 50; // Evaluates to true 

// 4. Logical Operators //
/* 
* Logical Operators are used to run tests resulting in true or false. They are used in 
* between two values or variables to determine their logic.
*/

// && And - This AND That evaluates to true
var a = 2;
var b = 12;
(a < 8 && b > 1); // Evaluates to be true because BOTH statements are true.

// || Or - This OR That evaluates to true
(a === 2 || b === 11);  // Evaluates to be true because 1 of the values is true.
 
 // 5. Unary Operators //
/* Takes a single argument and performs an operation. It only has one operand that 
*comes before and after the operator.
*/
 //They are as follows:
 // Unary plus (+)  Converts the operand into a number.
 var tired = 5;
 tired = +tired; // The value is a number so it doesn't take any effect
 
 // Unary minus (-)  Converts the operand into a number and negates after
 tired = -tired; // The value is negated

 // prefix/postfix increments (++) add one to its operand.
 tired++; // Evaluates to 6
 
 // prefix/postfix decrements (--) subtracts one from its operand.
 tired--; // Evaluates to 5
 
 // Logical Not (!)  Converts to boolean value then negates it
 var theSandwhiches = 2;
 theSandwhiches!= 1; // Evaluates to true

 // typeof  Use to determine the datatype. It evaluates objects, booleans, function, number, strings and whether it's undefined.
 var value = "Max";
 typeof value; // Evaluates to string
 
 
 // 6. Ternary Operators // 
 /* 
 * Takes three operands. A comparison ?, a result upon a true comparison followed by a colon (:), and 
 * a third based on a false comparison. This can be use in place of a if conditional statement. It requires less code.
 */

function freeShipping(total){
 return (total ? total >= 50 : total <= 49)
};
console.log(freeShipping(12)); //Return false to the screen
console.log(freeShipping(250)); //Returns true to the screen
