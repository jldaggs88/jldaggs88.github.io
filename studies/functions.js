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
*This is also called the invoking. 
*/

function numbersAdd (num1, num2) { // Parameters will determine the input
    return num1 + num2 //Will give us a specific output
}
numbersAdd(6,9); // Prints 15 to the console.

// NAMED function
// To make a named function declare it in a statement or use as an expression. This means that the name property of the function
// holds its name.

function namedFunction () { //A named function begins with the function keyword followed by the name of the function
    //Inside the curly brackets is where you place the action to be perofrmed at the call.
}
namedFunction(); //To run the code block or action the function must be called or ivoked outside of it

// Function Expression
/* The assignment of a function to a variable is calle da function expression. They are useful when working with creating a IIFE.
*They are a function expression is alot like a function declaration. If you omit the function name it becomes an anomymous function.
*Function expressions must be defined when used. 
*/
var functionVar = function () {
    
};

// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
// How do we specify inputs, and how do we specify outputs?

// We specific inputs by setting parameters. We specify outputs by coding a return statement.

/* Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
*The global scope has access only to the variables declared in that scope. The function scope 
* has access to its variables and the variables of is parent or global scope. The nested scope
* has access to every single variable that has been declared in the global, function or its own scope.
*/

var x = 2; //Global scope

function functed(){
    var y = 4; //Function scope
    function scoped(){
        var z = 8; //Nested scope
        return (x + y + z);
    }
    return scoped();
};
functed(); //Displays 14 to the screen
//z; //Error not defined because variable z is a closure that can't be a access by its parent scope.

/* Closures: Functions form closures around the data they house. If an object returned from
*the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data 
*can continue to exist in these closures! (See: our meeting-room app for an example!) 
*(ALSO, see: Understanding JavaScript Closures with Ease)
*/

/* Closures are singular functions with access to the parent scope at any time. It's parent scope 
*variable can be used within the body of the closure function. Function expressions benefical
*when working with closures because they are defined with in their scope. Closures are useful for creating 
* private variables to protct customer information and partial application of functions.
*/

//Closure example

function subtract(number){
    return function () {//This inner function is accessing a variable from the outer function (number)
        number - 2;
    };
}
