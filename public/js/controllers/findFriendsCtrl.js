angular.module('socialApp')
.controller('findFriendsCtrl', function($scope, $state, friendService, peopleService){
$scope.friends=
$scope.test="im working"
$scope.people= peopleService.getPeople()
$scope.addFriend= function(newFriend){
  friendService.saveFriend(newFriend);
  $state.go("viewFriends");
}
// $scope.friends= mainService.getFriends();
// console.log(friends)

})
