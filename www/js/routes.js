angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('homePage', {
    url: '/page1',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('hTML', {
    url: '/page2',
    templateUrl: 'templates/hTML.html',
    controller: 'hTMLCtrl'
  })

  .state('javascript', {
    url: '/page3',
    templateUrl: 'templates/javascript.html',
    controller: 'javascriptCtrl'
  })

  .state('cSS', {
    url: '/page4',
    templateUrl: 'templates/cSS.html',
    controller: 'cSSCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('welcomePage', {
    url: '/page6',
    templateUrl: 'templates/welcomePage.html',
    controller: 'welcomePageCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});