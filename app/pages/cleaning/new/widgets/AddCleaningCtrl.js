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

    console.log("inside Add Cleaning Controller")
    jobService.getJob(1,1).then(function(response){
      $scope.job=response.job
      console.log($scope.job)
    })
  }

})();
