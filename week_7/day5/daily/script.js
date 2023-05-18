let numOfBottles = prompt("enter number of bottles")
console.log(`We start the song at ${numOfBottles} bottles`)
for (let i = 1; i <= numOfBottles; i++) {
    console.log(genFirstString(i))
    console.log(genSecondString(numOfBottles - i))
}

function genFirstString(num) {
    let pronoun = num == 1 ? "it" : "them";
    let str = `Take _${num}_ down, pass ${pronoun} around`
    if (num > 1) {
        str = "then, " + str
    }
    return str 
}

function genSecondString(bottles) {
    if (bottles === 0) {
        return "no bottle of beer on the wall";
    }
    if (bottles === 1) {
        return "we have now 1 bottle"
    }
    return `we have now ${bottles} bottles`
}