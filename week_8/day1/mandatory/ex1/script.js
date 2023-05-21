// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

const p_tags = document.getElementsByTagName('p')
const last_p = p_tags[p_tags.length - 1]
last_p.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

function changeBGtoRed(element) {
    element.style.backgroundColor = "red";

}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

function hide(element) {
    element.style.display = "none"
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

function makeBold() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach(function(element) {
        element.style.fontWeight = "bold";
});
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)