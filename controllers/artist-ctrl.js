module.exports = {
    artists: (request, response) => {
        response.render('pages/artist-index')
    },
    artistSongs: (request, response) => {
        response.render('pages/artist-song-index')
    },
    tab: (request, response) => {
        response.render('pages/tab')
    }
}