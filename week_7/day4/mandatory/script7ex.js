// In the js file, create an array called allBooks. This is an array of objects. 
// Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

let allBooks = [
    {
        title: "kamasutra",
        author: "david linch",
        image: "google.com",
        alreadyRead: false
    },
    {
        title: "Lord Of The Squares",
        author: "david boeiw",
        image: "faceboo.com",
        alreadyRead: true
    }

]

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

for (let book of allBooks) {
    let parent = document.getElementsByTagName('section')[0]
    const new_div = document.createElement('div');
    const textNode = document.createTextNode(`${book['title']} written by ${book['author']}`);
    new_div.appendChild(textNode)

    if (book['alreadyRead']) {
        new_div.style.setProperty('color', 'red')
    }
    parent.appendChild(new_div)

}