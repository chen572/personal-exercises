const express = require('express')
const router = express.Router()

const Person = require('../models/person')

router.post('/person', (req, res) => {
    const p = new Person(req.body)
    p.save()
    res.send(p)
})

router.put('/person/:id', (req, res) => {
    const { id } = req.params
    Person.findByIdAndUpdate({ _id: id }, { age: 80 }, (e, p) => { console.log(p) })
    res.end()
})

router.delete('/apocalypse', (req, res) => {
    Person.deleteMany((e, p) => { console.log(p) })
    res.end()
})

module.exports = router