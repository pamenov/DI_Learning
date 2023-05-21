// <!-- Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more. -->

const obj = document.getElementById("my_object")
obj.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "red"
});

obj.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "green"
});

obj.addEventListener("click", function(event) {
    const value = `${Math.round(Math.random() * 800)}px`
    event.target.style.top = value
    const hualue = `${Math.round(Math.random() * 1000)}px`
    event.target.style.left = hualue
});