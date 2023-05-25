function checkAnagram(event) {
    event.preventDefault()
    const answer = document.createElement('h2')
    let answerText
    const inputs = document.getElementsByTagName('input')
    const in1 = inputs[0].value
    const in2 = inputs[1].value
    const someText = document.createTextNode('asdasd')
    console.log([...in1].sort())
    console.log([...in2].sort())
    if ([...in1].sort().join("") === [...in2].sort().join("")) {
        console.log("yes")
        answerText = "YEEEEAH! ANAGRAMS!!!!"
    } else {
        console.log("no")
        answerText = "NOPE!"
    }
    answer.appendChild(document.createTextNode(answerText))
    document.body.appendChild(answer)
}