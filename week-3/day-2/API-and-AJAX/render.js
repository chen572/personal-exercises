const Renderer = () => {
    const renderResults = results => {
        const resultContainer = $('<div class="gifs-container"></div>')

        results.forEach(result => resultContainer.append(`<div class="frame"><iframe class="in-frame" src="${result}"></iframe><button class="add">Add</button></div>`));

        $('#container').empty();
        $('#container').append(resultContainer);
    };
    
    const renderFavoriteGifs = favoriteGifs => {
        $('#container').empty();
        $('#favorite-container').empty();

        const appendContainer = $('<div class="gifs-container2"></div>');

        appendContainer.append('<h1 class="title">Favorite Gifs</h1>')
        favoriteGifs.forEach(gif => appendContainer.append(`<div class="frame"><iframe src="${gif}"></iframe></div>`))

        $('#favorite-container').append(appendContainer);
    }

    return { renderResults, renderFavoriteGifs }
};