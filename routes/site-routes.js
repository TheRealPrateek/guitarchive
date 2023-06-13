const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-ctrl');

router.route('/') 
    .get(siteController.home)
router.route('/about')
    .get(siteController.about)
router.route('/login')
    .get(siteController.login)
    .post(siteController.loginPost)
router.route('/search')
    .get(siteController.search)
router.route('/register')
    .get(siteController.register)
    .post(siteController.registerPost)
router.route('/auth/google')
    .get(siteController.googleGet)
router.route('/auth/google/profile')
    .get(siteController.googleRedirectGet)
router.route('/logout')
    .get(siteController.logout)
    .post(siteController.logout)
    
module.exports = router;