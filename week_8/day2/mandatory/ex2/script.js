// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let funcOne = (a, b) => { return a + b }
// console.log(funcOne(7, 13))

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
function toGramsOne(x) {
    return x * 1000;
}

let toGramsTwo = function(x) {
    return x * 1000;
}

let toGrams = x => {return x * 1000}

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments:
//  number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function f(numOfKids, partnersName, location, jobTitle) {
//     let str = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numOfKids} kids.`
//     let text = document.createTextNode(str)
//     let new_p = document.createElement('p')
//     new_p.appendChild(text)
//     document.body.appendChild(new_p)
// })(18, 'Muhhamad', 'Zimbabve', 'president')



// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function andUserToNavbar(name) {
    alert(`hello ${name}`)
    let new_div = document.createElement('div')
    let text = document.createTextNode(name)
    new_div.appendChild(text)
    let parent = document.getElementsByClassName("container-fluid")[0]
    parent.appendChild(new_div)
    return 0;
})("John")
