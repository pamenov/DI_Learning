const express = require('express')

const app = express()
app.use(express.static('public'));

app.get('/', (req, res) => {})


app.listen(3000, () => console.log("server is running on port 3000"))