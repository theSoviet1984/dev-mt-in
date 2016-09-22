angular.module('socialApp')
.controller('viewFriendsCtrl', function($scope, $state, friendService, mainService, peopleService){

$scope.friends= friendService.getFriends();
console.log('ctrl', $scope.friends)



$scope.profilePermenant = mainService.getProfiles()
// $scope.removeFriend(newFriend){
//   // for(var i =0; i<$scope.friends.length; i++){
//   //   if($scope.friends[i].fullName === newFriend){
//   //     $scope.friends.slice(friends[i]);
//   //   }
//   // }
//
// }
})
