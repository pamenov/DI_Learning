function hello() {
    alert("hello, 2000")
}

setTimeout(hello, 2000)

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addHello() {
    let container = document.getElementById("container")
    const new_p = document.createElement("p")
    const text = document.createTextNode("Hello, 2000")
    new_p.appendChild(text)
    container.appendChild(new_p)
}

setTimeout(addHello, 2000)

const intervalId = setInterval(addHello, 2000)


function stopThisShit() {
    clearInterval(intervalId);
}

const button = document.getElementById("clear")
button.addEventListener("click", stopThisShit)

setTimeout(stopThisShit, 8001)