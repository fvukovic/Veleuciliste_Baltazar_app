angular.module('starter')
  .controller('ProfilCtrl', function ($scope, $stateParams, $http) {
    var request = $http({
      method: "GET",
      url: 'https://baltazarapp.bak.hr/rest/smjerovi.php',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {console.log(data); 
      for (var v = 0; v < data.length; v++) {
        
        if (data[v]["id"] == window.localStorage.getItem("smjer")) {
          $scope.smjer = data[0]["title"] ; 
        }
      }
    });
       var request = $http({
      method: "GET",
      url: 'https://baltazarapp.bak.hr/rest/godine.php',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {console.log(data);
      for (var v = 0; v < data.length; v++) {
        
        if (data[v]["id"] == window.localStorage.getItem("godina")) {
          $scope.godina = data[0]["title"] ;alert();
        }
      }
    });

     if (0 == window.localStorage.getItem("godina")) {
          $scope.godina ="Neregistrirani korisnik";
        }
    console.log("aaaaaaaaaa");
  });


