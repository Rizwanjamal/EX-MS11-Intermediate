/* 
for (statement 1; statement 2; statement 3) {
   code block to be execute
}

Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/

// ======================================================

// Program 1
var i = 10;
var number = 2
for(i; i >= 1; i-= 2) {
   console.log(number + " x " + i + " = " + number*i)
}

// ======================================================

// Program 2
var students = ["Abdullah", "Salman", "Rizwan", "Faizan"];

var fatherNames = ["Abdullah's father", "salman's father", "Rizwan's father", "faizan's father"];

for(var i=0; i< students.length; i++) {
   console.log(students[i] + ' ' + fatherNames[i]);
}
// Output will be 

// Abdullah Abdullah's father
// Salman salman's father
// Rizwan Rizwan's father
// Faizan faizan's father

// ======================================================

// Program 3
// Table
// 5 x 1 = 5
function printTable(number) {
   var i = 10;
   for(i; i >= 1; i-= 2) {
   console.log(number + " x " + i + " = " + number*i)
   }
}

function getUserInputForTableProgram() {
   var userInput = prompt("Enter Any Number ?", 2);
   printTable(userInput);
}

// getUserInputForTableProgram(); //Uncomment to Run that function 

// Two Dimensional Loop
function numberSequence () {
   for(var i = 0; i <= 2; i++){
      for(var j = 1; j <= 3; j++) {
         console.log(i,j)
      }
   }
}

// Loop On Array

for(var i = 0 ; i < studentNames.length; i++) {
   console.log('student Name :', studentNames[i])
}
