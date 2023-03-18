// 28. Write a program to print the given patterns using the loops-
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***


let n = 3; // row or column count
// defining an empty string
var string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += `*`;

  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
//output
// ***
// ***
// ***
