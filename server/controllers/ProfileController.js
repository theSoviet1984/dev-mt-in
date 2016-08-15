var Profiles = require ('../models/Profiles')

module.exports = {

  createProfile: function(req, res){
    Profiles.create(req.body, function( err, result ){
      if ( err ) {
        return res.status(500).json(err);
      }
      return res.status(200).json(result)
    })
  }
}
