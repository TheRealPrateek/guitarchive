const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist-ctrl');

router.route('/') 
    .get(artistController.artists);
router.route('/:artistId')
    .get(artistController.artistSongs);
router.route('/:artistId/:tabId')
    .get(artistController.tab);

module.exports = router;