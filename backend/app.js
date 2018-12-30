const express = require('express')
const app = express()
const port = 3000
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://db:27017', (err, db) => {
    if(err) throw err
    console.log(`Connected with MongoDB`)
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))