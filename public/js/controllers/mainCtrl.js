angular.module('socialApp')
.controller('mainCtrl', function($scope, $state, mainService){

$scope.profilesPermenant=mainService.getProfilesPermenant();



$scope.landingProfile= mainService.getProfiles()
console.log($scope.landingProfile)

$scope.avatars = mainService.getAvatars()
$scope.avatarNames = $scope.avatars.map(function(avatar){
  return avatar.name;
})

// $scope.avatarSelected= avatarSelected;
$scope.createProfile = function(newProfile){
  console.log(newProfile)

    // for(var i =0; i<$scope.avatars.length; i++){
    //   if ($scope.avatarToUse === $scope.avatars[i].name){
    //   newProfile.avatarImg = avatars[i].img
    //   }
    // }
    mainService.saveProfile(newProfile)
    $state.go("landingPage")

 }



})
