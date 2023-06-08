let http = require('http')

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200)
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    response.end(JSON.stringify(user))
})
server.listen(8080, "localhost", () => {
    console.log("listener is listening")
})