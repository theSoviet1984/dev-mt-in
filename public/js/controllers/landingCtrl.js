angular.module('socialApp')
.controller('landingCtrl', function($scope, $state, mainService){

$scope.test="im working"


var getData = function(){
mainService.getProfile()
  .then(function(response){
  var profiles= response.data
  $scope.landingProfile =profiles[profiles.length-1]
  })
}
getData()



$scope.createProfile = function(newProfile){
mainService.saveProfile(newProfile)
console.log(newProfile)
 }



})
