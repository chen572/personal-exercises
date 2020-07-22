const mongoose = require('mongoose')
const Planet = require('./Schemas/PlanetSchema')
const System = require('./Schemas/SolarSystemSchema')
const Visitor = require('./Schemas/VisitorSchema')
const { populate } = require('./Schemas/PlanetSchema')

mongoose.connect('mongodb://localhost/SolarSystemDB')

const s1 = new System({
    planets: [],
    systemName: 'Home'
})

const p1 = new Planet({
    name: "Earth",
    system: s1,
    visitors: []
})

const v1 = new Visitor({
    name: 'Joe',
    homePlanet: p1,
    visitedPlanets: [p1]
})

// s1.planets.push(p1)
// p1.visitors.push(v1)

// s1.save()
// p1.save()
// v1.save()

// Visitor.find({}).populate('homePlanet').exec((err, data) => { console.log(data)})

// Visitor.find({}).populate('visitedPlanets').exec(function (err, visitor) {
//     console.log(visitor)
// })
// Planet.find({}).exec(function (err, visitor) {
//     console.log(visitor)
// })

// Find all the visitors on a planet
// Planet.find({}).populate('visitors').exec((err, data) => { console.log(data) })


// Find all the visitors in a system (subdocuments!)
// System.find({}).populate({
//     path: 'planets',
//     populate: {
//         path: 'visitors'
//     }
// }).exec((err, data) => { console.log(data[0].planets) })

// Find the name of the star in the system of a visitor's home planet
// Visitor.find({}).populate({
//     path: 'homePlanet',
//     populate: {
//         path: 'system',
//         populate: {
//             path: 'planets'
//         }
//     }
// }).exec((err, data) => { console.log(data[0].homePlanet.system.planets[0].name)})

// Find a planet's system's star name as well as its visitors
// Planet.find({}).populate('system visitors').exec((err, data) => { console.log(data[0].system.systemName, data[0].visitors) })