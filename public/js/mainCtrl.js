angular.module('socialApp')
.controller('mainCtrl', function($scope, $state, mainService){
$scope.profilesPermenant=mainService.getProfilesPermenant();
$scope.landingProfiles=mainService.getProfiles();
$scope.friends= mainService.getFriends();
$scope.editedProfiles = mainService.getProfiles();

// $scope.edit= function(profile){
//   mainService.updateProfile(profile)
// }
$scope.friends=mainService.getFriends();

$scope.createProfile = function(newProfile){
mainService.saveProfile(newProfile)
 }
$scope.updateProfile = function(profile){
  mainService.updateProfile(profile)
}
//edit view//
$scope.display=true;
$scope.edit = function(){
  $scope.display = false;
}
$scope.save = function(){
  $scope.display = true;
}
// use after backend hooked up//
  // $scope.createProfile = function(profile){
  //   mainService.createProfile(profile).then(function(result){
  //     console.log(result)
  //   })
  // }
})
