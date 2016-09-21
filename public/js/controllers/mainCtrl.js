angular.module('socialApp')
.controller('mainCtrl', function($scope, $state, mainService){

$scope.profilesPermenant=mainService.getProfilesPermenant();
$scope.test="im working"


$scope.landingProfile= mainService.getProfiles()
console.log($scope.landingProfile)

$scope.avatars = mainService.getAvatars()

$scope.createProfile = function(newProfile){
  console.log(newProfile)
var avatarImgToUse = "";
    for(var i =0; i<$scope.avatars.length; i++){
      if ($scope.avatars[i].name === newProfile.avatarSelected.name){
      avatarImgToUse=(avatars[i].img)
      }
    }
    var newProfilePlusAvatar = newProfile.avatarImg=avatarImgToUse
    console.log(newProfilePlusAvatar)
mainService.saveProfile(newProfilePlusAvatar)

 }



})
