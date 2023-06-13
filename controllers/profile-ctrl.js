module.exports = {
    profile: (request, response) => {
        response.render('pages/profile')
    },
    upload: (request, response) => {
        response.render('pages/new-tab')
    }
}