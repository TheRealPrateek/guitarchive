const Artist = require('../models/artist-model');

module.exports = {
    artists: async function (request, response) {
        Artist.find({}).then(function(musicians) {
            response.render('pages/artist-index', {
                musicians: musicians
            })
        }).catch(function(error) {
            console.log(error)
            response.render('pages/error')
        })
    },
    artistSongs: async function (request, response) {
        let artistId = request.params.id
        Artist.findById(artistId).then(function(artistSongs){
            response.render('pages/artist-song-index', {
                artistSongs: artistSongs
            })
        }).catch(function(error){
            console.log(error)
            response.render('pages/error')
        })
    }
}