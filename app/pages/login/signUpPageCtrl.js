/**
 * @author mgocmen
 * created on 06.10.2017
 */
(function () {
  'use strict';
  angular.module('BlurAdmin.pages').
  controller('singUpPageCtrl', singUpPageCtrl);

  /** @ngInject */
  function singUpPageCtrl(jobService,$scope,userService,$location,$cookies,$rootScope) {
    $scope.user={}

    $scope.signup=function(){
      var data={"user":{"email":$scope.user.email,"password":$scope.user.password,"password_confirmation":$scope.user.password,"role":1}}
      userService.signup(data)
      .then(function(response){
        console.log(response)
        $cookies.put("user_id",response.id)
        $rootScope.isLoggedIn=true
        $location.path('/cleaning/cleanings');
      })
    }
  }

})();
