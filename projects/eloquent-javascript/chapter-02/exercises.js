function triangles(num) {
  // Create a loop that make seven calls to the console.
  
//Create an empty container for the string of # symbols
var loopedTriangle = "#";
// For loop through the 1 and the given number.
  for(var i = 1; i <= num; i++) {
    // If i is greater than 1 add a # symbol to the variable loopedTriangle.
    if(i > 1){
      loopedTriangle += "#";
    }
    console.log(loopedTriangle); //Prints acsending lines of # symbols. 
  }
}

function fizzBuzz(num1, num2) {
  // Print all numbers 1 to 100 the the screen. 
  // Create a loop to iterate through the numbers.
  for(var num = num1; num <= num2; num++){
  // If it can be divided by 3 & 5 print fizzbuzz instead.
  if(num % 3 === 0 && num % 5 ===0){
    console.log("fizzbuzz");
  // Else if it can be evenly divided by 3 print fizz to the console instead.
  } else if (num % 3 === 0){
    console.log("fizz");
  // Else if it can be evenly divided by 5 print buzz to the console instead.
  } else if (num % 5 === 0){
    console.log("buzz");
  // Else print the given number the console.
  }else {
    console.log(num);
  }
}
}

function drawChessboard(size) {
  // Create a string that represents a 8x8 grid using /n characeters to separate lines.
  // Create a container to house the symbols.
  var line = "";
  // Iterate through any binding size.
  for (var y = 0; y < size; y++){
  //Second binding track
    for (var x = 0; x < size; x++){
  // If the sum of the two counters is even to 2 concat a space to line.
      if((x + y) % 2 === 0){
        line += ' ';
  // Else concat a # symbol to line.
      } else {
        line += '#'
    }
  }
// End a line by adding a newline character to the line variable.
line += '\n';
}
console.log(line); // Prints checcboard to the screen.
}