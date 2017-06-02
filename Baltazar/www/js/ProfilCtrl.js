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
          $scope.smjer = data[v]["title"] ; 
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
          $scope.godina = data[0]["title"] ; 
        }
      }
    });

     if (0 == window.localStorage.getItem("godina")) {
          $scope.godina ="Neregistrirani korisnik";
        }
     if (null == window.localStorage.getItem("ime") || "" == window.localStorage.getItem("ime")) {
          $scope.ime ="IME";
        } else{

          $scope.ime=window.localStorage.getItem("ime");
        }  
        if (null == window.localStorage.getItem("prezime") || "" == window.localStorage.getItem("prezime")) {
          $scope.prezime ="PREZIME";
        } else{

          $scope.prezime=window.localStorage.getItem("prezime");
        }  
        if (null == window.localStorage.getItem("adresa") || "" == window.localStorage.getItem("adresa")) {
          $scope.adresa ="Adresa nije unesena";
        } else{

          $scope.adresa=window.localStorage.getItem("adresa");
        }  
         if (null == window.localStorage.getItem("mail") || "" == window.localStorage.getItem("mail")) {
          $scope.mail ="E-mail nije unesen";
        } else{

          $scope.mail=window.localStorage.getItem("mail");
        }  
         if (null == window.localStorage.getItem("tel") || "" == window.localStorage.getItem("tel")) {
          $scope.tel ="Telefon nije unesen";
        } else{

          $scope.tel=window.localStorage.getItem("tel");
        } 
    console.log("aaaaaaaaaa");
  });


