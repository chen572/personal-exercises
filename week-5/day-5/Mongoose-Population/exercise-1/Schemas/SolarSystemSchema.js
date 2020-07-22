const mongoose = require('mongoose')
const Schema = mongoose.Schema

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: "planet"}],
    systemName: String
})

const System = mongoose.model("system", solarSystemSchema)
module.exports = System