const express = require('express');
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
  res.send(req);
  // res.redirect('/popular-tvshows');
});

router.get('/get-shows-popular', (req, res, next) => {
  const apiUrl = requestUrl('tv/popular');

  return fetch(apiUrl)
    .then(res => res.json(apiUrl))
    .then(data => {
      res.send({data});
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
