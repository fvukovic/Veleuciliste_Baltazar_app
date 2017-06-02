angular.module('starter')
  .controller('HomeCtrl', function ($scope, $stateParams, $http) { 
      $scope.vijesti;
       $scope.markers = [];

    
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/newsList.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  for(var v=0;v<data.length;v++){
                      
                  }
                  $scope.vijesti = data;
                  console.log(data);
                });

      


 
      });

   
