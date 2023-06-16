const Tab = require('../models/tab-model')

module.exports = {
    artistIndex: async function (request, response) {
        Tab.find({}).then(function(tabs) {
            response.render('pages/artist-index', {
                tabs: tabs
            })
        }).catch(function(error) {
            console.log(error)
            response.render('pages/error')
        })
    },
    artistSongIndex: async function (request, response) {
        let tabArtist = request.params.artist;
        Tab.find({artist: tabArtist}).then(function(artistTabs) {
            response.render('pages/artist-song-index', {
                artistTabs: artistTabs,
            })
        }).catch(function(error) {
            console.log(error)
            response.render('pages/error')
        })
    },
    tabIndex: async function (request, response) {
        Tab.find({}).then(function(tabs) {
            response.render('pages/song-index', {
                tabs: tabs
            })
        }).catch(function(error) {
            console.log(error)
            response.render('pages/error')
        })
    },
    tab: (request, response) => {
        let tabId = request.params.id
        Tab.findById(tabId).then(function(tab) {
            response.render('pages/tab', {
                tab: tab
            })
        }).catch(function(error) {
            console.log(error)
        })
    },
    createTabPost: (request, response) => {
        const {name, artist, file, videoLink} = request.body;
        const newTab = new Tab ({
            name: name,
            artist: artist,
            file: file,
            videoLink: videoLink
        });
        newTab.save();
        response.redirect('/profile');
    },
    updateTabPut: (request, response) => {
        let tabId = request.params.id;
        const {name, artist, file, videoLink} = request.body;
        Comic.findByIdAndUpdate(tabId, { $set: { 
            name: name,
            artist: artist,
            file: file,
            videoLink: videoLink
        }}).catch(function(error) {
            console.log(error);
        })
        response.redirect('/profile');
    },
    deleteTab: (request, response) => {
        let tabId = request.params.id;
        Tab.findByIdAndDelete(tabId).catch(function(error){
            console.log(error)
        });
        response.redirect('/profile');
    }
}