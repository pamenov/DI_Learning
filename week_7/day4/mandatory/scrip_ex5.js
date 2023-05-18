// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
let divs = document.getElementsByTagName('div')
let div = divs[0]
console.log(div)

// Change the name “Pete” to “Richard”.

li = document.getElementsByTagName('li')
li[1].innerText = "Richard"

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
ul = document.getElementsByTagName('ul')
ul[1].removeChild(li[3])

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
for (let item of ul ) {
    let first_child = item.querySelector('li');
    // console.log(first_child)

    first_child.innerText = "Pawa";
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
for (let item of ul ) {
    item.classList.add('student')
}

// Add the classes university and attendance to the first <ul>.
ul[0].classList.add('university')
ul[0].classList.add('attendance')

console.log(ul)

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
console.log(div.style)
div.style.cssText = `
    background-color: lightblue;
    padding: 20px;
`;


// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
ul[0].querySelector('li').style.setProperty('display', 'none')
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
document.getElementsByTagName('li')[1].style.setProperty('border', '5px solid red')

// Change the font size of the whole body.
document.documentElement.style.setProperty('font-size', '24px')

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
