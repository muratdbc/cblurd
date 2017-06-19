/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('CC.pages.cleaning')
      .controller('AddCleaningCtrl', AddCleaningCtrl);

  /** @ngInject */
  function AddCleaningCtrl(jobService,$scope) {
    $scope.addCleaning={}
    $scope.addJob=function(){
      console.log($scope.addCleaning)
    }
    console.log("inside Add Cleaning Controller")

  }

})();
