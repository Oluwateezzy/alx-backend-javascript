const express = require('express')
const app = express()

const port = 7865

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system')
})

app.get('/cart/:id([0-9]+)', (req, res) => {
    const {id} = req.params
    res.send(`Payment methods for cart ${id}`)
})

app.listen(port, ()  => {
    console.log(`API available on localhost port ${port}`)
})
