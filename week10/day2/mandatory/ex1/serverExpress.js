const express = require('express')
const app = express()

const html = '<html><body><h1>Express</h1></body></html>'
app.get('/', (req, res) => res.send(html))

app.listen(3000)