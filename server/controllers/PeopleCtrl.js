var People = require ('../models/People')

module.exports = {
  createPerson: function(req, res){
      People.create(req.body, function(err, result){
        if ( err ){
          return res.status( 500 ).json( err);
        }
        return res.status( 200 ).json( result )
      })
  },
  getMany: function(req, res){
    People.find({}, function(err, result){
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(result)
    })
  },
  update: function(req, res){
    People.update(req.params.id, req.body, function(err, result){
      if( err ){
        return res.status(500).json(err);
      }
      return res.status(200).json(result);
    })
  },
  deleteById: function(req, res){
    People.delete(req.params.id, req.body, function(err, result){
      if(err){
        return res.status(500).json(err);
      }
      res.status(200).json(result);
    })
  }


}
