const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, //reference to a Book document
    reviewText: String,
    critic: { type: Schema.Types.ObjectId, ref: 'Critic' } //reference to a Critic document
})
    
const Review = mongoose.model("Review", reviewSchema)

module.exports = Review