// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//output -  [bread, "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
// const country = "USA";
// console.log([...country]);

// output ["U", "S", "A"]

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// // output [,]


// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message.

// const helloCulam = users.map(function(item) {
//     return `Shalom, ${item.firstName}`;
// });
// console.log(helloCulam);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

// const residents = users.filter(function(user) {
//     return user.role === 'Full Stack Resident';
// });

// console.log(residents)

// const combo = users.filter(function(user) {
//     return user.role === 'Full Stack Resident';
// }).map(function(user) {
//     return user.lastName
// })

// console.log(combo)

// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array 
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // Use the reduce() method to combine all of these into a single string.
// const reduced = epic.reduce((a, b) => {
//     return `${a} ${b}`
// })
// console.log(reduced)

// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.

const passedStudents = students.filter((student) => {
    return student.isPassed
});
console.log(passedStudents)
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in 
// Robotics” ect…)
students.filter((student) => {
    return student.isPassed
}).forEach((student) => {
    console.log(`GJ, ${student.name}!`)
})