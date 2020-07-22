// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

$.get('/randomWord').then(word => {
    Promise.all([$.get(`/synonyms/${word}`), $.get(`/sentiment/${word}`)]).then(results => {
        // console.log(results, word)
    })
})

$.get('/sentiment/Ploy').then(sentiment => {
    // console.log(sentiment)
})

$.get('/randomWord').then(word => {
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
})

$.get('/randomWord').then(word => {
    Promise.all([
        $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`),
        $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=CfKbSddq8Ihrhjmzbl4vE4GybxTcWYLq`)
    ]).then(data => {
        console.log(data)
        $('body').append(`<h1>${data[0].items[0].volumeInfo.title}</h1> <iframe src=${data[1].data[0].embed_url}></iframe>`)
    })
})