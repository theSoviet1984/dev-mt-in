var mongoose = require ('mongoose');
var Friendschema = require('./Friends')
var ProfilesSchema = new mongoose.Schema({

fullName: {type: String},
username: {type: String, unique: true},
password: {type: String},
tagline: {type: String},
imageUrl: {type: String},
shortBio: {type: String},
avatarImage:{type: String},
friends: [
  {type: String}
]
})

module.exports = mongoose.model('Profiles', ProfilesSchema)
