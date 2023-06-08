const express = require('express')
const router = express.Router();
const tabController = require('../controllers/tab-ctrl')

router.route('/')
    .get(tabController.tabIndex);
router.route('/:tabId')
    .get(tabController.tab);

module.exports = router