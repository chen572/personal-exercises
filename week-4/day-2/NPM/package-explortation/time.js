const moment = require('moment')

let timeNow = new Date()
let formattedTimeNow = moment().format('MMMM Do, YYYY')
console.log(formattedTimeNow)

const urllib = require('urllib')

const key = 'c5634a34'

urllib.request(`http://www.omdbapi.com/?apikey=${key}&t=The Lion King`, function(err, response){
    console.log(JSON.parse(response).Released.toString())
})