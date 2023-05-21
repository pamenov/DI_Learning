// Declare a global variable named allBoldItems.

let allBoldItems = getBold_items();
// Create a function called getBold_items() that takes no parameter. This function should collect all the 
// bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    const p_tag = document.querySelectorAll("p")[0];
    let allBoldItems = []
    for (let i = 0; i < p_tag.children.length; i++) {
        let element = p_tag.children[i]
        if (element.style.fontWeight == "") {
            allBoldItems.push(element)
        }
    }
    return allBoldItems
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let elem of allBoldItems) {
        elem.style.color = "blue"
    }
}

highlight()

// Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal() {
    for (let elem of allBoldItems) {
        elem.style.color = "black"
    }
}

return_normal()

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let p_tag = document.getElementsByTagName("p")[0]
p_tag.addEventListener("mouseover", highlight)
p_tag.addEventListener("mouseout", return_normal)