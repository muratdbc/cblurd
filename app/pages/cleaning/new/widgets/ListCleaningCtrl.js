/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('CC.pages.cleaning')
      .controller('ListCleaningCtrl', ListCleaningCtrl);

  /** @ngInject */
  function ListCleaningCtrl(jobService,$scope,Upload) {
    jobService.getAllJobs()
    .then(function(response){
      console.log(response)
      $scope.jobs=response[0].jobs
    })
    console.log("inside List Cleaning Controller")
    $scope.sizeLimit      = 10585760; // 10MB in Bytes
    $scope.creds = {
       bucket: 'c-cleaning',
       access_key: 'AKIAJ2T2UGRVGHAXPZBQ',
       secret_key: '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'
     }
     $scope.uploadFiles = function(files,id) {
       AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
       AWS.config.region = 'us-west-2';
       $scope.files=files
       var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
       angular.forEach(files, function(file) {
         file.progress=0

         var uniqueFileName = $scope.uniqueString() + '-' + file.name;
         var params = { Key: uniqueFileName, ContentType: file.type, Body:file, ServerSideEncryption: 'AES256' };

         bucket.putObject(params, function(err, data) {
           if(err) {
             alert("something went wrong try again")
             return false;
           }
           else {
             file.progress = 50;

             var photo={
               url: "https://s3-us-west-2.amazonaws.com/c-cleaning/"+uniqueFileName,
               job_id: id
             }
             console.log(photo)
            jobService.createPhoto(photo)
            .then(function(response){
              file.progress = 100;
              console.log(response)
            })
           }
         })
       });
   }

    // $scope.submit = function() {
    //   AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    //   AWS.config.region = 'us-west-2';
    //   var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
    //
    //       // Prepend Unique String To Prevent Overwrites
    //       var uniqueFileName = $scope.uniqueString() + '-' + $scope.file.name;
    //
    //       var params = { Key: uniqueFileName, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
    //
    //       bucket.putObject(params, function(err, data) {
    //         if(err) {
    //           alert("something went wrong try again")
    //           return false;
    //         }
    //         else {
    //            console.log(data)
    //         }
    //       })
    //   }

    $scope.fileSizeLabel = function() {
      // Convert Bytes To MB
      return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
    };

    $scope.uniqueString = function() {
      var text     = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 8; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

  }

})();
