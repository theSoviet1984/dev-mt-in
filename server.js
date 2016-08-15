var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require ('mongoose')
var app = express();
var port = 8100;
var ProfileController = require ('./server/controllers/ProfileController')



// const mongoURI = `mongodb://localhost:27017/socialApp`;

app.use('/', express.static( __dirname + "/public") );
app.use(bodyParser.json())

// mongoose.connect(mongoURI);
// mongoose.connection.once(`open`, function(){
//   console.log(`Connected to mongo at: `, mongoURI )
// })

//endpoints

app.route('/api/profile')
.post( ProfileController.createProfile)
// .get( ProfileController.getMany)
// .put( ProfileController.create )
// .delete( ProfileController.deleteById);

app.listen(port, function(err){
  console.log('Listening on port ' + port);
})
