const router = require('express').Router()
const { Book } = require('../models')

router.get('/book', (req, res) => {
  Book.find()
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.post('/book', (req, res) => {
  Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.put('/book/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.delete('/book/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove())
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router
