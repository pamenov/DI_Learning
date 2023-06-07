let main = require('./main.js')
let http = require('http')

const b = 5;
console.log(main.largeNumber + b)
const server = http.createServer((request, response) => {
    response.writeHead(200)
    const partI = `My Module is ${main.largeNumber + b}`
    const htmlText = `<html><body>${partI}<h1>TTTTTTTTKKJBBBBIJBUJHUH</h1></body></html>`
    response.end(htmlText)
})
server.listen(3000, "localhost", () => {
    console.log("listener is listening")
})