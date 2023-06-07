// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). 
// You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the
// value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


function check_number(users_input) {
    if (isNaN(users_input)) {
        return false
    }
    let number = parseFloat(users_input)
    if (number < 0) {
        return false;
    }
    if (number > 10) {
        return false;
    }
    if (!Number.isInteger(number)) {
        return false;
    }
    return true;
}


function playTheGame() {
    let want_to_play = confirm("wanna play?");
    if (!want_to_play) {
        alert("ok, goodbye");
        return 0;
    }
    let victory_count = 0;
    while (victory_count < 3) {
        console.log("im in while < 3")
        victory_count += oneRoundGame()
    }
    alert("out of chances")
}


function oneRoundGame() {
    let users_input = prompt("enter number from 0 to 10")
    if (!check_number(users_input)) {
        console.log("not check_number")
        alert("Sorry its not a good number, bye");
        return 0;
    }
    let number = parseFloat(users_input)
    console.log(number, "users input")
    let computerNumber = Math.round(Math.random() * 10)
    console.log(computerNumber)
    return compareNumbers(number, computerNumber)
}


// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) 
// that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” 
// (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” 
// (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.

function compareNumbers(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
        alert("WINNER");
        return 1;
    }
    if (userNumber < computerNumber) {
        alert("Your number is smaller")
        return 0;
    }
    if (userNumber > computerNumber) {
        alert("Your number is bigger")
        return 0
    }
}

