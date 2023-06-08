let http = require('http')

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200)
    const htmlText = `<html><body><p>first</p><p>second</p><p>third</p></body></html>`
    response.end(htmlText)
})
server.listen(3000, "localhost", () => {
    console.log("listener is listening")
})