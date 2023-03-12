const express = require('express')
const app = express()
const port = 3000

app.get(
    '/',
    (req, res) => {
        res.send('<h1>Submission for capstone project</h1>')
    }
)

app.get(
    '/success',
    (req, res) => {
        res.send('<h1>Submitted successfully!</h1>')
    }
)

app.listen(
    port,
    () => {
        console.log(`Example app listening on port ${port}`)
    }
)

