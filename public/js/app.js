angular.module('socialApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('entry', {
        url: '/',
        templateUrl: "../views/entry.html",
        controller: 'entryCtrl'
      })
      .state('landingPage', {
        url: '/landingPage',
        templateUrl: "../views/landingPage.html",
        controller: 'landingCtrl',
        resolve:{
          profile: function(mainService, $q){
            return $q.resolve(mainService.getProfile())
          }
        }
      })
      .state('updateProfile',{
        url:'/updateProfile',
        templateUrl: "../views/updateProfile.html"
      })
      .state('findFriends',{
        url:'/findFriends',
        templateUrl: "../views/findFriends.html"
      })
      .state('viewFriends', {
        url: '/viewFriends',
        templateUrl: "../views/viewFriends.html"
      })

});
