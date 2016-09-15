angular.module('socialApp')
.controller('viewFriendsCtrl', function($scope, $state, mainService){

$scope.friends= mainService.getFriends();
console.log('ctrl', $scope.friends)

console.log($scope.friends)



})
