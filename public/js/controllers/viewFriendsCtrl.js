angular.module('socialApp')
.controller('viewFriendsCtrl', function($scope, $state, friendService, peopleService){

$scope.friends= friendService.getFriends();
console.log('ctrl', $scope.friends)

console.log($scope.friends)



})
