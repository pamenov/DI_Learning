// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// a === 3, if works

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

// a === 5, if const - its an error

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// a === 5 if we run funcTwo(), a === 0 if we wont run funcTwo()

// #2.1 - run in the console:
funcThree() // a === 0
funcTwo()
funcThree() // a === 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello"; // it won't affect global a
}


function funcFive() {
    alert(`inside the funcFive function ${a}`); // the same as funcThree() after calling funcTwo() a === 5
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;  // error here we've declared a in line 17
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);  // a === "test", its local a, not global
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// everything's ok with const. The same result

//#5
let a = 2;  // also error, a was in line 17
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // a === 5
}
alert(`outside of the if block ${a}`); // a === 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?