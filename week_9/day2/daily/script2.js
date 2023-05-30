const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


const toJs = (str) => {
  return new Promise((resolve, reject) => {
    if (str.length === 0) {
      reject("empty string")
    } else {
      resolve(JSON.parse(str))
    }
  })
}

toJs(morse).then((res) => {
  console.log(res)
})


const toMorse = (morseJS) => {
  return new Promise ((resolve, reject) => {
    const words = prompt("enter word").split(" ")
    let res_arr = []
    words.forEach((word) => {
      for (letter of word) {
        if (letter in morseJS) {
          res_arr.push(morseJS[letter])
        }
        else {
          reject("bad letter")
        }
      }

    })
  resolve(res_arr)
  })
}


// toJs(morse).then((obj) => {
//     toMorse(obj).then((res) => {
//       console.log(res)
//       }).catch( (err) => {
//         console.log(err)
//     })
//   }
// )


const joinWords = (arr) => {
  for (letter of arr) {
    const new_p = document.createElement('p')
    new_p.appendChild(document.createTextNode(letter))
    document.body.appendChild(new_p)
  }
}

toJs(morse).then((obj) => {
    toMorse(obj).then((res) => {
      joinWords(res)
      }).catch( (err) => {
        console.log(err)
    })
  }
)