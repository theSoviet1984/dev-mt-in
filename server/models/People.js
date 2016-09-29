var mongoose = require ('mongoose');

var Peopleschema = new mongoose.Schema({
  fullName: { type: String},
  tagline: { type: String},
  imageUrl: { type: String},
  shortBio: { type: String},
  avatarImage: { type: String}
})

module.exports = mongoose.model('People', Peopleschema)
