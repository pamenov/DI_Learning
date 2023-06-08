const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())

const user = {firstname: 'John',lastname: 'Doe'}
app.get('/users', (req, res) => {
    console.log(JSON.stringify(user))
    return res.send(JSON.stringify(user))
})

app.get('/:id', (req, res) => {
    res.send(req.params) 
})


app.listen(3000, () => console.log("server is running on port 3000"))