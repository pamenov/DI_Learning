let n = parseInt(prompt("enter number"))

for (let i = 1; i < n + 1; i++) {
    console.log("* ".repeat(i))
}

for (let i = 1; i < n + 1; i++) {
    let str = ""
    for (var j = 0; j < i; j++) {
        str += "+ "
    }
    console.log(str)
}
