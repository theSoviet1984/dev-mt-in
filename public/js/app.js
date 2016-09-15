angular.module('socialApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('entry', {
        url: '/',
        templateUrl: "../views/entry.html",
        controller: 'mainCtrl'

      })
      .state('landingPage', {
        url: '/landingPage',
        templateUrl: "../views/landingPage.html",
        controller: 'mainCtrl'
      })
      .state('updateProfile',{
        url:'/updateProfile',
        templateUrl: "../views/updateProfile.html",
        controller: 'updateProfileViewCtrl'

      })
      .state('friendProfileView',{
        url:'/friendProfileView',
        templateUrl: "../views/friendProfileView.html",
        controller: 'firendProfileViewCtrl'
      })
      .state('findFriends',{
        url:'/findFriends',
        templateUrl: "../views/findFriends.html",
        controller: 'findFriendsCtrl'
      })
      .state('viewFriends', {
        url: '/viewFriends',
        templateUrl: "../views/viewFriends.html",
        controller: 'viewFriendsCtrl'
      })

});
