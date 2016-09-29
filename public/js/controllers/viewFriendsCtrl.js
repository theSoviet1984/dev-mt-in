angular.module('socialApp')
.controller('viewFriendsCtrl', function($scope, $state, friendService, mainService, peopleService){

var getData = function(){
  mainService.getProfile().then(function(response){
    console.log(response.data)
    $scope.profile=response.data;
  })
}
getData();

// var getFriends = function(){
//   friendService.getFriends().then(function(response){
//     $scope.friends = response.data
//     console.log(response.data)
//     console.log($scope.friends)
//   })
// }
// getFriends();


$scope.removeFriend = function(newFriend){

}


// $scope.removeFriend(newFriend){
//   // for(var i =0; i<$scope.friends.length; i++){
//   //   if($scope.friends[i].fullName === newFriend){
//   //     $scope.friends.slice(friends[i]);
//   //   }
//   // }
//
// }
})
