require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/connection')
const router = require('./routes/router')
const cookpediaServer = express()
cookpediaServer.use(cors())
cookpediaServer.use(express.json())// to convert json to js object
cookpediaServer.use(router)
const PORT = 3000
cookpediaServer.listen(PORT, () => {
    console.log(`Cookpedia server running in port ${PORT}`)
})
cookpediaServer.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red">Cookpedia server is running and waiting for requests</h1>`)
})