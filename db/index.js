module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_db', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})
