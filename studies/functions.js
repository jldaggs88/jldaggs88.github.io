/**
* FUNCTIONS
* 
* Functions are blocks of code that perform an action once evoked. The function keyword , unique
* name of the function then followed by parenthesis that will hold a given parameter. It is known placeholder 
* After the parameter is curly braces that will house a code block for execution. Functions are utilized by
* calling or evoking the function using the name of the function followed by arguments in the space of the placeholder
* we created. Objects are first class objects.
*/

// The two phases to using functions: First we must ___? Next we can execute 
// (or two other words for executing a function?) a function by?

/*First we must code the function body. Once complete outside of the function we 
* evoke or call the function. 
*/

// What’s the difference between a function’s parameters and arguments PASSED to a function?
/* A function parameters are placeholders that tell us what type of arguments to pass into our function.
* Parameters are used through the function to indicate what action we will later perform on the arguments.
* Arguments are placed outside of the function body. They are part of the function call. Calling the function
* passes the arguments into the parameters set throughout the code block. The action we coded will take place on the arguments.
*/

function numbersAdd (num1, num2) { // Parameters will determine the input
    return num1 + num2 //Will give us a specific output
}
numbersAdd(6,9); // Prints 15 to the console.

// What’s the syntax for a NAMED function?
function namedFunction () {
    
}
namedFunction();

// How do we assign a function to a variable?
var functionVar = function () {
    
};

// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
// How do we specify inputs, and how do we specify outputs?

// We specific inputs by setting parameters. We specify outputs by coding a return statement.

// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
/* Closures: Functions form closures around the data they house. If an object returned from
*the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data 
*can continue to exist in these closures! (See: our meeting-room app for an example!) 
*(ALSO, see: Understanding JavaScript Closures with Ease)
*/


// WRITE ON SCOPES CLOSURES NAMED FUNCTION AND FUNCTION EXPRESIION