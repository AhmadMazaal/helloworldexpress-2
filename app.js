const express = require('express')
const app = express()
const port = 3000

app.get(
    '/',
    (_, res) => {
        res.send('<h1>Submission for capstone project</h1>')
    }
)

app.get(
    '/success',
    (_, res) => {
        res.send('<h1>Submitted successfully!</h1>')
    }
)

app.get(
    '/error',
    (_, res) => {
        res.status(500).send('<h1>Sever down response</h1>')
    }
)

app.listen(
    port,
    () => {
        console.log(`SL-capstone app listening on port ${port}`)
    }
)

