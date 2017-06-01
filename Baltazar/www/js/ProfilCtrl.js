angular.module('starter')
  .controller('ProfilCtrl', function ($scope, $stateParams, $http) {
   $scope.godina=window.localStorage.getItem("godina");
   $scope.smjer=window.localStorage.getItem("smjer");
   $scope.mail==window.localStorage.getItem("mail");
   $scope.mobitel=window.localStorage.getItem("tel"); 
   $scope.ulica==window.localStorage.getItem("postanski");
   $scope.grad==window.localStorage.getItem("mjesto");
   console.log("aaaaaaaaaa"); 
      });

   
