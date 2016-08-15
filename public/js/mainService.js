angular.module('socialApp').service('mainService', function($http){

var profiles = [];
 this.saveProfile = function(profileObj){
   profiles.push(profileObj)
   console.log('PROFILES:', profiles);
 }
 this.getProfile = function(){
  if(profiles[0]){
    return profiles[0]
  } else {
    return {
      fullName: 'TEST',
      tagline: 'test',
      imgUrl: 'test.test',
      shortBio: 'tester tester'
    }
  }
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
