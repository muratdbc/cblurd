/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'ngCookies',
    // 'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    // 'BlurAdmin.pages.profile','
    'CC.pages.cleaning'
  ])
      .config(routeConfig)
      .run(["$cookies","$location","$rootScope",function($cookies,$location,$rootScope){
        var isLoggedIn
        // $cookies.put("user_id",1)
        if($cookies.get('user_id')){
          $rootScope.isLoggedIn=true
          $location.path('/cleaning/cleanings');
        }else{
          $rootScope.isLoggedIn=false
          $location.path('/login');
        }

      }])




  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider,$stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/auth/logInPage.html',
        controller: 'logInPageCtrl',
      }).state('singup', {
          url: '/signup',
          templateUrl: 'templates/auth/signUpPage.html',
          controller: 'singUpPageCtrl',
      });
     $urlRouterProvider.otherwise('/cleaning/new');


    baSidebarServiceProvider.addStaticItem({
      title: 'Account',
      icon: 'ion-document',
      subMenu: [{
        title: 'User Profile',
        stateRef: 'profile'
      }
      // ,{
      //   title: 'Sign In',
      //   stateRef: 'auth.html',
      //   blank: true
      // }, {
      //   title: 'Sign Up',
      //   fixedHref: 'reg.html',
      //   blank: true
      // }, {
      //   title: '404 Page',
      //   fixedHref: '404.html',
      //   blank: true
      // }
    ]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Payments',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
