// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar 
// to socialNetworkNavigation, using the setAttribute method.
let div = document.getElementById("navBar")
div.setAttribute('id', 'socialNetworkNavigation')

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const new_li = document.createElement('li');
let uls = document.getElementsByTagName('ul')

// Create a new text node with “Logout” as its specified text.
const textNode = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
new_li.appendChild(textNode)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
uls[0].appendChild(new_li)
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> 
// elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).