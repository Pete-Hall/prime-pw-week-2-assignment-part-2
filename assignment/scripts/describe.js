// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' with a value of string 'Dane'. Since we used 'let', we can update the value of 'name' later on if we want to.
// We create a conditional statment that checks to see if the value (and datatype) of the variable 'name' is equal to the string 'Mary'.
// If the conditional statement is true ('name' is equal to 'Mary'), the console will log 'Hi, Mary!'. If not, the console will log 'How do you do?'.
// Since the variable 'name' is not equal to the string 'Mary', the console will log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret' with no stored value. Since we used 'let' to create the variable, we can update the value of 'secret' later on if we want to.
// We create another variable called 'code' set it to the number 123.
// We create a conditional statement that checks to see if the variable 'code' is equal in value and datatype to the number 123. If that statement is true, the value of variable 'secret' is set to string 'super' and the variable 'code' is set to the value of 'code times 2', which is the number 246 (since 123 * 2 = 246). If the conditional statement is not true, nothing happens. In this case, the conditinal statement is true, so the value of variable 'secret' is now 'super' and the value of code is now number 246.
// We create another conditional statement that checks to see if the variable 'code' is greater than the number 250. If that statement is true, the variable 'secret' is set to the value of string 'duper'. If the conditional statement is not true, nothing happens. In this case, since the value of variable 'code' is currently set at 246, the conditional statement is not true, which means that nothing happens.
// At the end, we console log the current value of the variable 'secret', which would show us the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'isStudent' and set it to the boolean value of 'true'. Since we used 'let', this variable can be updated later on if we want. 
// We create another variable called 'age' and set it to the number 34. Since we used 'let', this variable can be updated later on if we want.
// We create a third variable called 'zip' and set it to the number 55407. Since we used 'let', this variable can be updated later on if we want.
// We create an if...else conditional statment code block. 
// In this if...else code block, we first create a conditional statement that checks to see if the variable 'isStudent' is equal in value and datatype to the boolean 'true' AND if the variable 'zip' is equal to the number 80000. If both of those statements are true, the console will log 'You're a student on the West Coast!'. If not, we check a new conditional statment to see if the variable 'isStudent' is equal in value and datatype to the boolean 'false' OR if the variable 'age' is less than the number 30. If either of these two previous statements are true, the console will log 'What are your hobbies?'. If not, we create another new conditional statement that checks to see if the variable 'isStudent' is equal in value and datatype to the boolean value 'true'. If that statement is true, the console will log 'Welcome to Prime!'. If not, the console will log 'How about the weather?' and end the else...if conditional block.
// The console will log 'Welcome to Prime!' since that is the first conditional statement that is true (isStudent is indeed equal to the boolean 'true').

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne is supposed to be set to 'blue'.
//Should be: let colorOne = 'blue';
let colorOne = 'red';
//FIX - colorTwo is supposed to be set to 'red'.
//Should be: let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - if true (which it is) colorOne AND colorTwo should be set to 'purple', not just colorOne.
  //Should be: colorOne = 'purple';
  //           colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX - the conditional statement is supposed to be AND, not OR (||).
//Should be: if (temp > 39 && time >=4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX - we want to check if age is greater than or equal to minAge, not if minAge is less than or equal to age.
//Should be: if(age >= minAge) {
if(minAge <= age) {
  //FIX - we want the true value of the conditional statement to console log 'enter'
  //Should be: console.log('enter');
  console.log('no entry');
} else {
  //FIX - to correspond with the above fix, we want to console.log 'no entry' if the conditional statement is not true.
  //Should be: console.log('no entry');
  console.log('enter');
}
*/

