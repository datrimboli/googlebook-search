const router = require('express').Router()
const axios = require('axios')
const { Media } = require('../models')

router.get('/omdb/:search', (req, res) => {
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${req.params.search}`)
    .then(({ data }) => data.Search.map(media => ({
      title: media.Title,
      year: media.Year,
      imdbID: media.imdbID,
      type: media.Type,
      poster: media.Poster
    })))
    .then(apiMedia => Media.find()
      .then(media => apiMedia.filter(data =>
        media.every(dbData => dbData.imdbID !== data.imdbID))))
    .then(media => res.json(media))
    .catch(err => console.log(err))
})

module.exports = router
