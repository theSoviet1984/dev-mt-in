angular.module('socialApp')
.controller('mainCtrl', function($scope, $state, mainService){

  $scope.createStarterProfile = function(newProfile){

      mainService.saveProfile(newProfile)
      $state.go("addInfo")

   }
var getStarterProfile = function(){
  mainService.getProfile().then(function(response){
      console.log(response.data)
    var profiles= response.data
    $scope.starterProfile =response.data
    })
  }
getStarterProfile()

// var getProfile = function(){
//   mainService.getProfile()
//
// }
$scope.updateProfile = function(newProfile){
  mainService.updateProfile()
}


$scope.avatars = mainService.getAvatars()
$scope.avatarNames = $scope.avatars.map(function(avatar){
  return avatar.name;
})

// $scope.avatarSelected= avatarSelected;



})
