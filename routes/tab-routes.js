const express = require('express')
const router = express.Router();
const tabController = require('../controllers/tab-ctrl')

router.route('/')
    .get(tabController.tabs);

module.exports = router