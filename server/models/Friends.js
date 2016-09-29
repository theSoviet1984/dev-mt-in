var mongoose = require ('mongoose');

var Friendschema = new mongoose.Schema({
  fullName: { type: String},
  tagline: { type: String},
  imageUrl: { type: String},
  shortBio: { type: String},
  avatarImage: { type: String}
})

module.exports = mongoose.model('Friends', Friendschema)
