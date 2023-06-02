const express = require('express');
const router = express.Router();
const siteRoutes = require('./site-routes');
const artistRoutes = require('./artist-routes');
const profileRoutes = require('./profile-routes');

router.use('/', siteRoutes);
router.use('/artists', artistRoutes);
router.use('/profile', profileRoutes);

module.exports = router;