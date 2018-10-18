const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const getPopularTVShows = require('./utils').getPopularTVShows;
const tvShowSearch = require('./utils').tvShowSearch;
const mixedMediaSearch = require('./utils').mixedMediaSearch;

let title;

router.post('/search-media', (req, res) => {
  mixedMediaSearch(req, res);
});

router.get('/get-shows-popular', (req, res, next) => getPopularTVShows(res));

module.exports = router;
