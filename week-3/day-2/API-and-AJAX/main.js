// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name%of%the%Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//     //extract the geo data of the first user

//     let lat = users[0].address.geo.lat
//     let long = users[0].address.geo.lng

//     console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496

//     let catchPhrase = users[users.length - 1].company.catchPhrase;

//     console.log(catchPhrase);
// })

// const useData = data => { data.items.forEach(element => {
//   console.log(element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.industryIdentifiers);
// })};

// const fetch = (queryType, queryValue) => {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: useData,
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
// };

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")
// $('button').click(fetch);



const gifs = Gifs();
const renderer = Renderer();

$('#search').click(() => {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${$('#input').val()}&api_key=CfKbSddq8Ihrhjmzbl4vE4GybxTcWYLq&limit=5`,
        success: res => { 
            const searchResults = res.data.map(gif => gif.embed_url);
            renderer.renderResults(searchResults);
        },
        error: (xhr, text, err) => { alert('something went wrong') }
    });
});

$('#container').on('click', '.add', event => {
    const gif = $(event.currentTarget).siblings('.in-frame').attr("src");

    gifs.addToFavoriteGifs(gif);
    renderer.renderFavoriteGifs(gifs.getFavoriteGifs());
});
