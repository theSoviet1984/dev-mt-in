angular.module('socialApp')
.controller('entryCtrl', function($scope, $state, mainService){

  $scope.createProfile = function(profileObj){
    mainService.saveProfile(profileObj)
    $state.go('landingPage')
  }

// use after backend hooked up//
  // $scope.createProfile = function(profile){
  //   mainService.createProfile(profile).then(function(result){
  //     console.log(result)
  //   })
  // }
})
