/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: function($scope,userService,$location,$cookies,$rootScope){
        $scope.signout=function(){
          userService.signout()
          .then(function(response){
            $cookies.remove("user_id");
            $rootScope.isLoggedIn=false
            $location.path('/login');
          })

        }
      }
    };
  }

})();
