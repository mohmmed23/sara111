const mongoose = require('mongoose')
const card = mongoose.Schema

// define the Schema (the structure of the article)
const NewCard = new card({
  name: String,
  email: String,
  password: String,
  bob: String,
})

// Create a model based on that schema
const Card = mongoose.model('Article', NewCard)

// export the model
module.exports = Card

//? ------- to connect react with express:-
//*react=>package.json =>proxy =localhostexpress
