angular.module('starter')
    .controller('LoginCtrl', function ( $ionicHistory,$scope, $stateParams, $http, $state) {
        $scope.smjerovi;
        $scope.godine;
        $scope.odabraniSmjer;
        $scope.odabraniSmjerg;
        $scope.odabranaGodina;

 

$scope.checkItems = { }

        var request = $http({
            method: "GET",
            url: 'https://baltazarapp.bak.hr/rest/smjerovi.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        
        request.success(function (data) {
            $scope.smjerovi = data;
            console.log(data);
        });
        var request = $http({
            method: "GET",
            url: 'https://baltazarapp.bak.hr/rest/godine.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
               $scope.godine = [
                { id: '0', title: 'Duh',checked:false },
            ]
            for (var i = 0; i < data.length; i++) { 
                        $scope.godine.push({
                            id: data[i]["id"], title: data[i]["title"], checked: true
                        }); 
                  
                }



            $scope.godine = data;
            console.log(data);
        });
 

        $scope.showSelectValue = function (mySelect) {
            $scope.odabraniSmjer = mySelect;
        }
        $scope.showSelectValueG = function (mySelect) {
            $scope.odabranaGodina = mySelect;
        }

        $scope.prijavi = function (mySelect) {
            window.localStorage.setItem("smjer", $scope.odabraniSmjer);
            window.localStorage.setItem("login","1");
    
             var array = [];
  
      var request = $http({
            method: "GET",
            url: 'https://baltazarapp.bak.hr/rest/godine.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) {
              $scope.godine2=[];
              for(var i in $scope.checkItems) {
        console.log(i);  
            for (var v = 0; v < data.length;v++) {  
                if(i ==data[v]["id"] ){ 
                    $scope.godine2.push({
                        id: i, title: data[v]["title"], checked: false
                    }); 
                    }
                } 
                  window.localStorage.setItem("godina", JSON.stringify($scope.godine2));

                    } 
    console.log($scope.godine2);
        });
 
  
  
          
            var request = $http({
                method: "POST",
                url: 'https://baltazarapp.bak.hr/rest/newsDetails.php',
                data: { push: "1", os: "android", token: window.localStorage.getItem("token"), godina: $scope.odabranaGodina, smjer: $scope.odabraniSmjer, ime: "", prezime: "", telefon: "", adresa: "", email: "" },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                console.log("Prijava" + data);
                $state.go("bapp.home");
            });
        }

    });
