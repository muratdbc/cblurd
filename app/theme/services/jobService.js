/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
  .factory('jobService', ['Restangular', function(Restangular){
      Restangular.setDefaultHeaders({"Content-Type":"application/json"})
      Restangular.setBaseUrl('http://localhost:3000');
      // this is service object with list of methods in it
      // this object will be used by controller
      var service = {
          getJobs: getJobs,
          getJob: getJob,
          getAllJobs: getAllJobs,
          createPhoto: createPhoto
      };


      // get example with given id from server by using Restangular
      function getJobs(userId){
        return Restangular.all('users/'+userId+'/jobs').getList();
      }
      function getJob(userId,cleaningId){
        return Restangular.one('users/'+userId+'/jobs/'+cleaningId).get();
      }
      function getAllJobs(){
        return Restangular.all('jobs').getList();
      }
      function createPhoto(photo){
        return Restangular.all('photos').post(photo)
      }
      return service;
    }])

})();
