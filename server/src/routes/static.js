const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const getPopularTVShows = require('./utils').getPopularTVShows;
const tvShowSearch = require('./utils').tvShowSearch;

let title;
router.get('/search-shows', (req, res, next) => tvShowSearch(res, title));

router.post('/search-shows', (req, res) => {
  console.log('req', req.body);
  // console.log('res', res);
  title = req.body.title;

  if (!title) res.send('You need to enter a title');
  res.send(res);
  // res.redirect('/popular-tvshows');
});

router.get('/get-shows-popular', (req, res, next) => getPopularTVShows(res));

module.exports = router;
