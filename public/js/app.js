angular.module('socialApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: "../views/home.html",
        controller: 'mainCtrl'
      })
      .state('addInfo', {
        url: '/addInfo',
        templateUrl: "../views/addInfo.html",
        controller: 'mainCtrl'

      })
      .state('landingPage', {
        url: '/landingPage',
        templateUrl: "../views/landingPage.html",
        controller: 'landingCtrl'
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
