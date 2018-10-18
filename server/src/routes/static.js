const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const getPopularTVShows = require('./utils').getPopularTVShows;
const mixedMediaSearch = require('./utils').mixedMediaSearch;
const getPopularMovies = require('./utils').getPopularMovies;

let title;

router.post('/search-media', (req, res) => {
  mixedMediaSearch(req, res);
});

router.get('/get-shows-popular', (req, res, next) => getPopularTVShows(res));
router.get('/get-movies-popular', (req, res, next) => getPopularMovies(res));

module.exports = router;
