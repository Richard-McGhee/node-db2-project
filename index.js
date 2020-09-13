const express = require('express')
const helmet = require('helmet')
const db = require('./data/connection')
const server = express()

server.use(express.json())
server.use(helmet())

server.get("/", (req, res) => {
    if(req){
        res.status(200).send("<h1>We up</h1>")
    } else{
        res.status(500).json({ message: "Something is wrong" })
    }
})

const port = process.env.PORT || 666
server.listen(port, () => {
    console.log(`Server up and listening on port: ${port}`)
})