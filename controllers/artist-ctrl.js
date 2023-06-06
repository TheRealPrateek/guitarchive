const Artist = require('../models/artist-model');

module.exports = {
    artists: async function (request, response) {
        Artist.findOne({_id: "647e699c6316e49e73d546f2"}).then(function(musicians) {
            response.render('pages/artist-index', {
                musicians: musicians
            })
        }).catch(function(error) {
            console.log(error)
            response.render('pages/error')
        })
    },
    artistSongs: (request, response) => {
        response.render('pages/artist-song-index')
    },
    tab: (request, response) => {
        response.render('pages/tab')
    }
}