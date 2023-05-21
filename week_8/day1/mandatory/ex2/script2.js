// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval 
// to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.



function stepRight() {
    const obj = document.getElementById("animate")
    let left 
    if (!obj.style.left) {
        left = 0
    } else {
        left = parseInt(obj.style.left)
    }
    if (left >= 350) {
        left = -10
    }
    const new_left = `${left + 10}px`
    obj.style.left = new_left
}

function myMove() {
    console.log("mymove")
    const interval = setInterval(stepRight, 100)
}

