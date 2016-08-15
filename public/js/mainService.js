angular.module('socialApp').service('mainService', function($http){

var profiles = [];
 this.saveProfile = function(profileObj){
   console.log(profileObj)
   console.log(profiles)
   profiles.push(profileObj)
 }
 this.getProfile = function(){
   profiles.pop()
 }
//after backend setup//
  // this.createProfile = function(){
  //   return $http({
  //     method:'POST',
  //     data: profile,
  //     url: '/api/profile'
  //   }).then(function(response){
//   return response.data;
// })
  // }
})
