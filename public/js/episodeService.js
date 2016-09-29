angular.module('socialApp').service('friendService', function($http){

  this.getEpisopes = function(){
    return $http({
      method:'GET',
      url: "http://api-public.guidebox.com/v1.43/US/rKDIA6kE331mjgvGGur6ittNL3sQ0H2Z/shows"
    })
  }
})
