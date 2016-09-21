angular.module('socialApp')
.controller('firendProfileViewCtrl', function($scope, $state, friendService, peopleService){

$scope.friends=friendService.getFriends()
// $scope.friends= mainService.getFriends();
// console.log(friends)

$scope.addFriend=function(newFriend){
  friendService.saveFriend(newFriend)
}

$scope.people=peopleService.getPeople();

})
