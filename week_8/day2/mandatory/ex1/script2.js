// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10,
 // else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// let winBattle = () => {
//     return true;
// }

// let experiencePoints = winBattle() ? 10 : 1
// console.log(experiencePoints)



// ____________________________exercise 3

// Write a JavaScript arrow function that checks whether the value of the argument passed, 
// is a string or not. Use ternary operator
// Check out the example below to see the expected output

// let isString = (str) => { 
//     return typeof str == "string" ? true : false
// }

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”.
//  If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color}.`);
// });

// let check = colors.some((color) => {
//     return color.toLowerCase() == "violet"
// })
// console.log(check)


// 🌟 Exercise 5 : Colors #2
// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const ordinal = ["st","nd","rd", "th"];
// let ending = n => { return n < 3 ? ordinal[n] : ordinal[3] }
// colors.forEach((color, index) => {
//     console.log(`${index + 1}${ending(index)} choice is ${color}.`);
// });



// 🌟 Exercise 6
// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const VAT = 0.83;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes
//  (multiply each expense by the VAT).
details.forEach((element) => {
    bankAmount += parseFloat(element) * VAT;
})
console.log(bankAmount)
// Display your current bankAccount standing at the end of the month.
