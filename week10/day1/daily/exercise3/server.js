let main = require('./main.js')
let http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200)
    const htmlText = `<html><body><p>${main.getDateTime()}</p></body></html>`
    response.end(htmlText)
})
server.listen(8080, "localhost", () => {
    console.log("listener is listening")
})