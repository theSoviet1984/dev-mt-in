angular.module('socialApp')
.controller('landingCtrl',function($scope,$http, mainService, profile){
  $scope.profileObj = profile
})
