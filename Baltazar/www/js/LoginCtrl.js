angular.module('starter')
    .controller('LoginCtrl', function ($scope, $stateParams, $http,$state) {
        $scope.smjerovi;
        $scope.godine;
        $scope.odabraniSmjer;
        $scope.odabraniSmjerg;
        $scope.odabranaGodina;
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
              window.localStorage.setItem("smjer",  $scope.odabraniSmjer);
            window.localStorage.setItem("godina", $scope.odabranaGodina); 
            var request = $http({
                method: "POST",
                url: 'https://baltazarapp.bak.hr/rest/newsDetails.php',
                data: { push: "1",os:"android",token:window.localStorage.getItem("token"),godina:$scope.odabranaGodina,smjer: $scope.odabraniSmjer,ime:"",prezime:"",telefon:"",adresa:"",email:""},
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {

                console.log("Prijava" + data);
                  $state.go("bapp.home"); 
            });
        }

    });
