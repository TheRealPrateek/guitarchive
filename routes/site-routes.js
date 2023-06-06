const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-ctrl');

router.route('/') 
    .get(siteController.home);
router.route('/about')
    .get(siteController.about);
router.route('/login')
    .get(siteController.login);

module.exports = router;