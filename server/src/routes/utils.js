const fetch = require("node-fetch");

const apiKey = process.env.MOVIE_API_KEY;
const requestUrl =(urlParams, query='') => {
  const queryStr = query === '' ? '' : `&query=${query}`;
  return `https://api.themoviedb.org/3/${urlParams}?api_key=${apiKey}&language=en-US${queryStr}&page=1`};

module.exports = {
  getPopularTVShows: function(res) {
    const apiUrl = requestUrl('tv/popular')

    return fetch(apiUrl)
    .then(res => res.json(apiUrl))
    .then(data => {
      res.send({data});
    })
    .catch(err => {
      res.send(err);
    });
  },

  tvShowSearch: function(res, queryParam) {
    const apiUrl = requestUrl('search/tv', queryParam)

    return fetch(apiUrl)
      .then(res => res.json(apiUrl))
      .then(data => res.send({data}))
      .catch((...err) => {
        console.error(err)
        res.send(err)
      })
  }
};
