angular.module('socialApp').controller('updateCtrl', function($scope, mainService){

     $scope.profiles= mainService.profiles;
    makeObj();
    console.log(profiles)
function makeObj(profiles){
    if(profiles[0]){
  var profileObj ={
    name: profiles[0].fullName,
    tagline: profiles[0].tagline,
    image: profiles[0].imageUrl,
    bio: profiles[0].shortBio
  }
}
$scope.profileObj= profileObj;
}

    })
