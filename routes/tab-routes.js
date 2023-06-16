const express = require('express')
const router = express.Router();
const tabController = require('../controllers/tab-ctrl')

router.route('/')
    .get(tabController.tabIndex)
router.route('/artists')
    .get(tabController.artistIndex)
router.route('/artists/:artist')
    .get(tabController.artistSongIndex)
router.route('/:id')
    .get(tabController.tab)
    .put(tabController.updateTabPut)
    .delete(tabController.deleteTab)
router.route('/new')
    .post(tabController.createTabPost)

module.exports = router