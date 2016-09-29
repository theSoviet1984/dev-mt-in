angular.module('socialApp')
.controller('findFriendsCtrl', function($scope, $state, episodeService){

$scope.getEpisodes= function(){
  episodeService.getEpisodes().then(function(result){
    console.log(result.data)
    $scope.episodes=result.data;
  })
}
})
