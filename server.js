const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('hello docker')
})

app.listen('8080', function(){
    console.log('server listening on port: 8080')
})