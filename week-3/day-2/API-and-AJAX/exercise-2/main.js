
// const useData = data => {
//     data.items.forEach(element => {
//         console.log(element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.industryIdentifiers);
//     })
// };

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

// // fetch("isbn", 9789814561778)
// // fetch("title", "How to Win Friends and Influence People")
// $('button').click(fetch);


const neuroscienceComputerBooks = [];
const fetch = () => {
    const startIndex = [0, 40, 120];

    for (let i of startIndex) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&maxResults=40&startIndex=${i}`,
            success: res => {
                console.log(res)
                res.items.forEach(book => {
                    if (book.volumeInfo.categories) {
                        if (book.volumeInfo.categories.includes("Computers")) {
                            neuroscienceComputerBooks.push(book.volumeInfo.title)
                        }
                    }
                })
                console.log(neuroscienceComputerBooks);
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }
}

fetch();
