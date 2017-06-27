/**
 * @author m.gocmen
 * created on 06.22.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
  .factory('userService', ['Restangular', function(Restangular){
      Restangular.setDefaultHeaders({"Content-Type":"application/json"})
      Restangular.setBaseUrl('http://localhost:3000');
      // this is service object with list of methods in it
      // this object will be used by controller
      var service = {
          signin: signin,
          signup: signup,
          signout: signout

      };


      // get example with given id from server by using Restangular
      function signin(user){
        return Restangular.all('users/sign_in.json').post(user);
      }
      function signup(user){
        return Restangular.all('users.json').post(user);
      }
      function signout(){
        return Restangular.one('users/sign_out').get();
      }

      return service;
    }])

})();
