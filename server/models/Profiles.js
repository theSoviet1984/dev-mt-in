var mongoose = require ('mongoose');

var ProfilesSchema = new mongoose.Schema({

fullName: {type: String},
tagline: {type: String},
imageUrl: {type: String},
shortBio: {type: String}
})

module.exports = mongoose.model('Profiles', ProfilesSchema)
