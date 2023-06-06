const Artist = require('../models/artist-model')

module.exports = {
    home: (request, response) => {
        response.render('pages/home')
    },    
    about: (request, response) => {
        response.render('pages/about')
    },
    login: (request, response) => {
        response.render('pages/log-in')
    },
};

// this will eventually need to contain logout and google authentication methods as well