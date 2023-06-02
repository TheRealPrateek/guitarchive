const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist-ctrl');

router.route('/') 
    .get(artistController.artists);
router.route('/artists/:artistId')
    .get(artistController.artistSongs);
router.route('/artists/:artistId/:tabId')
    .get(artistController.tab);

module.exports = router;