// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed 
// (but keep the values entered by the user). 
// The user could click the button at least three times and get a new story. Display the stories randomly.

const form = document.forms["libform"]

function createStory(event) {
    event.preventDefault()
    let noun = form["noun"].value
    let verb = form["verb"].value
    let adjective = form["adjective"].value
    let name = form["person"].value
    let place = form["place"].value
    const story = `${name} ${verb} ${adjective} ${noun} in ${place}`
    const placeForStory = document.getElementById("story")
    const text = document.createTextNode(story)
    placeForStory.appendChild(text)

}