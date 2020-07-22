const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker: String,
    price: Number
})

const Computer = mongoose.model('computer', computerSchema)

let c1 = new Computer({ maker: 'HP', price: 1000 })
let c2 = new Computer({ maker: 'Lenovo', price: 1200 })
let c3 = new Computer({ maker: 'Dell', price: 1300 })
let c4 = new Computer({ maker: 'Apple', price: 1500 })
let c5 = new Computer({ maker: 'Google', price: 2300 })

const computersArr = [c1, c2, c3, c4, c5]
// computersArr.forEach(c => c.save())

// Computer.find({}).then((coms) => { console.log(coms) })
Computer.findByIdAndUpdate("5f0ed3013c790b0e6c4b282f", { price: 1700 }, { new: true }, function (err, person) {
    console.log(person)
})