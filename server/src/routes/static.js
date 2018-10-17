const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const getPopularTVShows = require('./utils').getPopularTVShows;
const tvShowSearch = require('./utils').tvShowSearch;

let title;

router.post('/search-shows', (req, res) => {
  console.log(req.body);
  tvShowSearch(req, res);
});

router.get('/get-shows-popular', (req, res, next) => getPopularTVShows(res));

module.exports = router;
