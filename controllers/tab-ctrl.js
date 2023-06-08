const Tab = require('../models/tab-model')

module.exports = {
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
    tab: async function (request, response) {
        let tabId = request.params.id
        Tab.findOne(tabId).then(function(tab) {
            response.render('pages/tab', {
                tab: tab
            })
        }).catch(function(error) {
            console.log(error)
        })
    }
}