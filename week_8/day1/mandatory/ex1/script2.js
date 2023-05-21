// Retrieve the form and console.log it.

const form = document.forms.my_form
// console.log(form)

// // Retrieve the inputs by their id and console.log them.
// const firstNameById = document.getElementById("fname")
// console.log(firstNameById)
// const lastNameById = document.getElementById("lname")
// console.log(lastNameById)

// // Retrieve the inputs by their name attribute and console.log them.
// const firstName = form.elements["fname"]
// console.log(firstName)
// const lastName = form.elements["lname"]
// console.log(lastName)

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
function processElement(element) {
    console.log(element.value)
    const text = document.createTextNode(element.value)

    const new_li = document.createElement('li')
    new_li.appendChild(text)
    return new_li
}


function mySubmit(event) {
    console.log("im in submit")
    event.preventDefault()
    const allElements = document.querySelectorAll("form")[0].querySelectorAll("input");
    const ul = document.getElementsByTagName("ul")[0]
    allElements.forEach(function(element) {
        const new_li = processElement(element)
        if (new_li.textContent != "Submit") {
            ul.appendChild(new_li)
        }
    })
    console.log(ul)
}

