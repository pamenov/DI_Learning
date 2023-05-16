// const people = ["Greg", "Mary", "Devon", "James"];

// ----------- Write code to remove “Greg” from the people array.

// people.shift()
// console.log(people)

// ---------- Write code to replace “James” to “Jason”.

// people.pop()
// people.push("Jason")
// console.log(people)

// ---------- Write code to add your name to the end of the people array.

// people.push("Pasha")
// console.log(people)


// ---------- Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(people.indexOf("Mary"))

// ---------- Write code to make a copy of the people array using the slice method.

// let people_copy = people.slice()
// console.log(people_copy)

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// people.splice(3)
// people.splice(0, 1)
// console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?

// console.log(people.indexOf("Foo"))

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// let my_var = people[people.length - 1]
// console.log(my_var)

// Using a loop, iterate through the people array and console.log each person.

// for (let person of people) {
//     console.log(person)
// }

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

// let i = -1 ;
// do {
//     i++;
//     console.log(people[i]);
// }
// while (people[i] != "Jason")


// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors = ["Black", "Black", "Black", "Black", "Black"]
// let suffix = ["st", "nd", "rd", "th", "th"]

// for (let i in colors) {
//     console.log(`My ${parseInt(i) + 1}${suffix[i]} choice is ${colors}`)
// }


// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let answer = parseInt(prompt("Enter the number"))
// while (answer < 10) {
//     answer = parseInt(prompt("Enter the number"))
// }


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
// console.log(building.numberOfFloors)

// // Console.log how many apartments are on the floors 1 and 3.

// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// // Console.log the name of the second tenant and the number of rooms he has in his apartment.

// let name = building.nameOfTenants[1]
// console.log(name, building.numberOfRoomsAndRent[name.toLowerCase()][0])

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1] > building.numberOfRoomsAndRent["dan"][1]) {
//     building.numberOfRoomsAndRent["dan"][1] = 1200
// } 
// console.log(building.numberOfRoomsAndRent["dan"][1])



// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

// let family = {
//     x: 1,
//     y: 2,
//     z: 3,
//     as: 12
// }

// for (let x in family) {
//     console.log(x)
// }

// for (let x in family) {
//     console.log(family[x])
// }


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
let arr = []
for (let name of names) {
    arr.push(name[0])
}
arr.sort()
console.log(arr.join(""))