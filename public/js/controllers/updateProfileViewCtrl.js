angular.module('socialApp')
.controller('updateProfileViewCtrl', function($scope, $state, mainService){

$scope.test="im working"




$scope.profileToEdit=mainService.getProfiles()
console.log($scope.profileToEdit)






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
