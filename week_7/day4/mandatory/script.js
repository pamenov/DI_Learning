// ************** EXERCISE 1 *************************

// // Create a function call isDivisible() that takes no parameter.

// // In the function, loop through numbers 0 to 500.

// function isDivisible() {
//     let sum = 0;
//     let array = [];
//     for (let i = 0; i < 500; i++) {
//         if (i % 23 == 0) {
//             array.push(i);
//             sum += i
//         }
//     }
//     console.log(array)
//     console.log(sum)
// }

// // Console.log all the numbers divisible by 23.

// // At the end, console.log the sum of all numbers that are divisible by 23.

// isDivisible()

// ************** EXERCISE 2 *************************
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means 
// that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];

// function myBill(shoppingList) {
//     let total_amount = 0;
//     for (let item of shoppingList) {
//         if (item in stock) {
//             total_amount += prices[item]
//         }
//     }
//     return total_amount
// }

// console.log(myBill(shoppingList))

// ************** EXERCISE 3 *************************

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), 
// the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the 
// function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 
// pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// function changeEnough(itemPrice, amountOfChange) {
//     let nominals = [0.25, 0.10, 0.05, 0.01];
//     let sum = 0;
//     for (let key in amountOfChange) {
//         sum += amountOfChange[key] * nominals[key]
//     }

//     return sum >= itemPrice
// }

// console.log(changeEnough(14.11, [2,100,0,0]))
// console.log(changeEnough(0.75, [0,0,20,5]))





// // ************** EXERCISE 4 *************************
// // Let’s create functions that calculate your vacation’s costs:

// // Define a function called hotelCost().
// // It should ask the user for the number of nights they would like to stay in the hotel.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // The hotel costs $140 per night. The function should return the total price of the hotel.

// function hotelCost() {
//     let numberNights = prompt("Enter number of nights");
//     while (isNaN(numberNights)) {
//         numberNights = prompt("Enter number of nights");
//     }
//     return parseFloat(numberNights) * 140
// }

// // Define a function called planeRideCost().
// // It should ask the user for their destination.
// // If the user doesn’t answer or if the answer is not a string, ask again.
// // The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$

// function planeRideCost() {
//     let destination = prompt("Enter destination");
//     while (!destination) {
//         destination = prompt("Enter destination");
//     }
//     if (destination == "London") {
//         return 183;
//     }
//     if (destination == "Paris") {
//         return 220;
//     }
//     return 300;
// }

// // Define a function called rentalCarCost().
// // It should ask the user for the number of days they would like to rent the car.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // Calculate the cost to rent the car. The car costs $40 everyday.
// // If the user rents a car for more than 10 days, they get a 5% discount.
// // The function should return the total price of the car rental.

// function rentalCarCost() {
//     let numberDays = prompt("Enter number of days");
//     while (isNaN(numberDays)) {
//         numberDays = prompt("Enter number of days");
//     }
//     let price = 40;
//     if (numberDays > 10) {
//         price *= 0.95
//     }
//     return numberDays * price
// }

// // Define a function called totalVacationCost() that returns the total cost of the user’s vacation by 
// // calling the 3 functions that you created above.
// // Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// // Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() 
// // inside the function totalVacationCost().
// function totalVacationCost() {
//     let result = 0;
//     result += planeRideCost()
//     result += hotelCost()
//     result += rentalCarCost()
//     return result
// }

// // Call the function totalVacationCost()
// console.log(totalVacationCost())

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the 
// totalVacationCost() function. You need to change the 3 first functions, accordingly.