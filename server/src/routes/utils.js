//@ts-check
const fetch = require('node-fetch');

const apiKey = process.env.MOVIE_API_KEY;
const requestUrl = (urlParams, query = '') => {
  const queryStr = query === '' ? '' : `&query=${query}`;
  return `https://api.themoviedb.org/3/${urlParams}?api_key=${apiKey}&language=en-US${queryStr}&page=1`;
};

module.exports = {
  // route run on page load
  getPopularTVShows: function(res) {
    const apiUrl = requestUrl('tv/popular');

    return fetch(apiUrl)
      .then(res => res.json(apiUrl))
      .then(data => {
        res.send({data});
      })
      .catch(err => {
        res.send(err);
      });
  },

  // route for searching tv shows
  tvShowSearch: function(req, res) {
    const apiUrl = requestUrl('search/tv', req.body.searchValue);

    return fetch(apiUrl)
      .then(_res => _res.json())
      .then(data => res.send({data}))
      .catch((...err) => {
        res.redirect('/error');
      });
  }
};
