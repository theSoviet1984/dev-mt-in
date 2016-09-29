angular.module('socialApp')
.controller('findFriendsCtrl', function($scope, $state, friendService, peopleService){


var getProfiles = function(){
  friendService.getProfiles().then(function(result){
    console.log(result.data)
    $scope.profiles=result.data;
  })
}
getProfiles()

$scope.addFriend= function(profile){
  friendService.saveFriend(profile);
  $state.go("viewFriends");
}
// $scope.friends= mainService.getFriends();
// console.log(friends)

})
