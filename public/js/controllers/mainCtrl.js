angular.module('socialApp')
.controller('mainCtrl', function($scope, $state, mainService){
$scope.profilesPermenant=mainService.getProfilesPermenant();
$scope.test="im working"


$scope.landingProfile= mainService.getProfiles()
console.log($scope.landingProfile)


$scope.createProfile = function(newProfile){
mainService.saveProfile(newProfile)
console.log(newProfile)
 }



})
