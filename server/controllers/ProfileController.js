var Profiles = require ('../models/Profiles')

module.exports = {

  createProfile: function(req, res){

  Profiles.create(req.body, function( err, result ){
    if ( err ) {
      return res.status(500).json(err);
    }
    req.session.user = result;
    res.status(200).send();
  })
},
  addFriend: function(req, res){
    console.log(typeof req.body._id)
      Profiles.findByIdAndUpdate("57e577ccdff58b5a385b2091", {$push: {friends:req.body._id}}, {new: true}, function(err, result){
        if ( err ){
          return res.status( 500 ).json( err);
        }

          return res.status( 200 ).json(result)

      })
  },
getRecent: function(req, res){
  Profiles.findById(req.session._id, function(err, result){
    if (err){
      res.status(500).json(err)
  }
  return res.status(200).json(result)
})
},
  getOne: function(req, res){
    Profiles.findById(req.params.id)
    .populate('friends')
    .exec( function(err, result){
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(result)
    })
  },
  getMany: function(req, res){
    Profiles.find({}, function(err, result){
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(result)
    })
  },
  // getFriends: function(req, res){
  //   Profiles.find()
  //   .where('fullName').equals('nameSearch')
  //   .populate('friends')
  //   .exec()
  // }
 update: function(req, res){
   Profiles.findOneAndUpdate({_id:req.params.id}, {$push: {friends: req.body}}, function(err, result){
     if ( err ) {
         return res.status( 500 ).json( err );
     } else {
       res.json(result);
     }
   })
 }
}
