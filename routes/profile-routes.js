const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile-ctrl')

router.route('/')
    .get(profileController.profile);
router.route('/upload')
    .get(profileController.upload)

module.exports = router;