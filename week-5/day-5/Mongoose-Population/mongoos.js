const mongoose = require('mongoose')
const Book = require('./Schemas/BookSchema')
const Critic = require('./Schemas/CriticsSchema')
const Review = require('./Schemas/ReviewsSchema')

mongoose.connect('mongodb://localhost/BooksDB')

let b1 = new Book({
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    reviews: []
})

let c1 = new Critic({
    name: "William Jeffery",
    reviews: []
})

let r1 = new Review({
    book: b1,
    critic: c1,
    reviewText: "Excellent Book"
})

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.find({})
//     .populate({
//         path: 'reviews',
//         populate: {
//             path: 'critic'
//         }
//     }).exec((err, data) => { console.log(data[0].reviews) })

Review.find({}).populate('book').exec(function (err, reviews) {
    console.log(reviews)
})