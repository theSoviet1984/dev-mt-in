angular.module('socialApp')
.controller('landingCtrl', function($scope, $state, mainService){

$scope.test="im working"



$scope.landingProfile= mainService.getProfiles()
console.log($scope.landingProfile)


$scope.createProfile = function(newProfile){
mainService.saveProfile(newProfile)
console.log(newProfile)
 }



})
