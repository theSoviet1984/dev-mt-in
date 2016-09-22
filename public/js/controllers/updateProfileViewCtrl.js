angular.module('socialApp')
.controller('updateProfileViewCtrl', function($scope, $state, mainService){

$scope.test="im working"

$scope.profileToEdit = mainService.getProfiles();


$scope.display = true;
$scope.edit = function(){
  $scope.display = false;
}

$scope.avatars = mainService.getAvatars()
$scope.avatarNames = $scope.avatars.map(function(avatar){
  return avatar.name;
})

$scope.updateProfile = function(newProfile){
  mainService.saveProfile(newProfile);
  $state.go("viewFriends")
}


})
