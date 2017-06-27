/**
 * @author mgocmen
 * created on 06.10.2017
 */
(function () {
  'use strict';
  angular.module('BlurAdmin.pages').
  controller('logInPageCtrl', logInPageCtrl);

  /** @ngInject */
  function logInPageCtrl(jobService,$scope,userService,$location,$cookies,$rootScope) {
    $scope.user={}


    $scope.submit=function(){
      var data={"user":{"email":$scope.user.email,"password":$scope.user.password,"remember_me":1}}
      userService.signin(data)
      .then(function(response){
        // console.log(response)
        $cookies.put("user_id",response.id)
        $rootScope.isLoggedIn=true
        $location.path('/cleaning/cleanings');
      })
    }
  }

})();
