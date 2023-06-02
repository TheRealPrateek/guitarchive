const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile-ctrl')

router.route('/profile/:userId')
    .get(profileController.profile);

module.exports = router;