angular.module('starter')
  .controller('MeetUsCtrl', function ($scope, $stateParams, $http) { 
   $scope.vijesti;
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/meetUs.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  $scope.vijesti = data;
                  console.log("OVO:"+data[0]["images"]);
                });

      });

   
