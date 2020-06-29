const Gifs = () => {
    const _favoriteGifs = [];

    const getFavoriteGifs = () => _favoriteGifs;

    const addToFavoriteGifs = gif => { _favoriteGifs.push(gif); }

    return { getFavoriteGifs, addToFavoriteGifs }
};