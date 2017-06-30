angular.module('starter')
  .controller('HomeCtrl', function ($scope, $stateParams, $http,$state,$timeout,$cordovaNetwork,$ionicLoading) { 
    $scope.tip="";
    console.log("USAO");
      $scope.vijesti;  
        var currentState = $state.current.name;  
                if(currentState=="app.home"){ 
                  $scope.tip="Novosti";
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


        }
          $scope.remMedia = function() {
         
    if($cordovaNetwork.isOnline()==true){  
        
        $timeout(funkcija, 2000);
    }else{
      $ionicLoading.show({ template: 'Nema interneta!' , noBackdrop: true, duration: 3000 });
    }
   
    $timeout( function () {
         
         $timeout(funkcija, 2000);
    },1000);
  }

      function funkcija() { 
           $state.go($state.current, {}, { reload: true });
        }
     if(currentState=="bapp.home" || currentState=="app.home"){ 
                  $scope.tip="Novosti";
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


        }


          if(currentState=="app.diplomski" || currentState=="bapp.diplomski"){ 
            alert();
                  $scope.tip="Diplomski";
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/diplomski.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  for(var v=0;v<data.length;v++){
                      
                  }
                  $scope.vijesti = data;
                  console.log(data);
                });


        }


             if(currentState=="app.studenti" || currentState=="bapp.studenti"){ 
              $scope.tip="Studenti";
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/studenti.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  for(var v=0;v<data.length;v++){
                      
                  }
                  $scope.vijesti = data;
                  console.log(data);
                });
        }

          if(currentState=="app.medunarodna" || currentState=="bapp.medunarodna"){ 
            $scope.tip="Međunarodna suradnja";
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/international.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  for(var v=0;v<data.length;v++){
                      
                  }
                  $scope.vijesti = data;
                  console.log(data);
                });


        }




                if(currentState=="app.preddiplomski" || currentState=="bapp.preddiplomski"){ 
$scope.tip="Preddiplomski";
      var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/preddiplomski.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  for(var v=0;v<data.length;v++){
                      
                  }
                  $scope.vijesti = data;
                  console.log(data);
                });


        }
        
 


 
      });

   
