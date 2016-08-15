angular.module('socialApp')
.controller('mainCtrl',function($scope,$http,$state,mainService){
$scope.profileObj={}
$scope.createProfile = function(profileObj){
  console.log("running")
  console.log($scope.profileObj)
 }
$scope.test2="working"
$scope.getProfile= function(){
  mainService.getProfile().then(function(response){
    $scope.profile=response.profile
  })
}



// use after backend hooked up//
  // $scope.createProfile = function(profile){
  //   mainService.createProfile(profile).then(function(result){
  //     console.log(result)
  //   })
  // }
})
