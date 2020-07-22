const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const router = require('./routes/Routes')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))

app.use('/', router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})