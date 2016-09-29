angular.module('socialApp').service('friendService', function($http){

this.saveFriend=function(newFriend){
  console.log(newFriend)
  return $http ({
    method: 'POST',
    data: newFriend,
    url:"/api/profiles/friends"
  })

}



this.getProfiles= function(){

  return $http ({
    method: 'GET',
    url: "/api/profiles"
  })

}
this.deleteFriend = function (friends){

}




})
