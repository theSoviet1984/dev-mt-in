var Friends = require ('../models/Friends')
var Profiles = require('../models/Profiles')
module.exports = {
  addFriend: function(req, res){
      Profiles.findByIdAndUpdate("57e577ccdff58b5a385b2091", {$push: {friends:req.body._id}}, function(err, result){
        if ( err ){
          return res.status( 500 ).json( err);
        }

          return res.status( 200 ).json(result)

      })
  },
  // getMany: function(req, res){
  //   Friends.find({}), function(err, result){
  //     if(err){
  //       return res.status(500).json(err);
  //     }
  //     return res.status(200).json(result)
  //   })
  // },
  // getOne: function(req, res){
  //   Friends.find(req.query)
  //   .exec(function(err, result){
  //     if (err){
  //       return res.status(500).json(err);
  //     }
  //     return res.status(200).json(result)
  //   })
  // },
  update: function(req, res){
    Friends.update(req.params.id, req.body, function(err, result){
      if( err ){
        return res.status(500).json(err);
      }
      return res.status(200).json(result);
    })
  },
  deleteById: function(req, res){
    Friends.findOneAndRemove({_id:req.params.id}, function(err, result){
      if(err){
        return res.status(500).json(err);
      }
      res.status(200).json(result);
    })
  }

  }
