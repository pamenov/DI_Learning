// In this exercise we will be creating a webpage with a black background as the universe and we will fill 
// the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Create an array which value is the planets of the solar system.


const allPlanets = [
    "Earth",
    "Venus",
    "Mars",
    "Snickers"
]
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color.
//  (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

for (let i in allPlanets) {
    let planet = allPlanets[i]
    let parent = document.getElementsByTagName('section')[0]
    let newDiv = document.createElement('div')
    newDiv.classList.add('planet')
    newDiv.classList.add(`${i}`)
    const textNode = document.createTextNode(`${planet}`);
    newDiv.appendChild(textNode)
    parent.appendChild(newDiv)
    console.log(parent)

    const elements = document.getElementsByClassName(`${i}`);
    elements[0].style.backgroundColor = getRandomColor();

}



// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?