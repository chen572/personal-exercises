const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'system'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'visitor'}]
})

const Planet = mongoose.model('planet', planetSchema)
module.exports = Planet