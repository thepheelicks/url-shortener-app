const express = require('express');
const { shorten, revert } = require('../controller/shorten');
const redirect = require('../controller/redirect');

const router = express.Router();

// @route POST /api/url/shorten
// @desc  Create short URL
router.post('/shorten', shorten);

// @route POST /api/url/revert
// @desc  Get long URL
router.post('/revert', revert);

// @route   GET /:code
// @desc    Redirect to original URL base on short URL
router.get('/:code', redirect);

module.exports = router;