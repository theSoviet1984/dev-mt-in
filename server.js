var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require ('mongoose')
var session = require ('express-session')
var passport = require ('passport');
var TwitterStrategy = require ('passport-twitter').Strategy
var ProfileController = require ('./server/controllers/ProfileController')
var FriendsCtrl = require ('./server/controllers/FriendsCtrl')
var PeopleCtrl = require ('./server/controllers/PeopleCtrl')

// passport.use( new TwitterStrategy({
//   consumerKey:
//   consumerSecret:
//   callbackURL: 'http://localhost:8100/auth/twitter/callback'
// },function(token, tokenSecret, profile, done){
//     console.log("token",token);
//     console.log("profile", profile);
//   return done(null, profile)
// }
// ))

var app = express();
var port = process.env.PORT || 8100
const mongoURI = `mongodb://localhost:27017/socialApp`;


app.use('/', express.static( __dirname + "/public") );
app.use(bodyParser.json())
app.use(session({
  secret: 'woot123456'
}))
// app.use(passport.initialize())
// app.use(passport.session())
// passport.serializeUser(function(user, done){
//   done(null, user)
// })
mongoose.connect(mongoURI);
mongoose.connection.once(`open`, function(){
  console.log(`Connected to mongo at: `, mongoURI )
})

// var requireAuth = function (req, res, next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//   return res.redirect('/home');
// }
// //passport//
// app.get('/auth/twitter', passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', passport.authenticate('twitter'),{
//   successRedirect: '/',
//   failureRedirect: '/home'
// }), function(req, res){
//   console.log(req.session);
// }
// app.get('/', requireAuth, function(req, res){
//   return res.sendFile(__dirname+'/public/entry.html')
// })
// app.get('/home', function(req, res){
//   return res.sendFile(__dirname+'/public/home.html')
// })
//endpoints
app.get('/api/profile/recent/', ProfileController.getRecent)
app.get('/api/profiles/:id', ProfileController.getOne)
app.get('/api/profiles', ProfileController.getMany)
app.post('/api/profiles/friends', ProfileController.addFriend)
app.post('/api/profiles', ProfileController.createProfile)

app.put('/api/profiles/:id', ProfileController.update)



// app.post('/api/friends', FriendsCtrl.createFriend )
// // app.get('/api/friends', FriendsCtrl.getMany)
// // app.get('/api/friends/:id', FriendsCtrl.getOne)
// app.put('/api/friends/:id', FriendsCtrl.update)
// app.delete('/api/friends/:id', FriendsCtrl.deleteById)

// question do I need people and profiles???///
// app.route('/api/people')
// .post(PeopleCtrl.createPerson )
// .get(PeopleCtrl.getMany)
// .put(PeopleCtrl.update)
// .delete(PeopleCtrl.deleteById)



app.listen(port, function(err){
  console.log('Listening on port ' + port);
})
