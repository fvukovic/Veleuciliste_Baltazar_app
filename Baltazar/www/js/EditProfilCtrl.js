angular.module('starter')
    .controller('EditProfilCtrl', function ($scope, $stateParams, $http,$state) {
        $scope.smjerovi
          var request = $http({
                    method: "GET",
                    url: 'https://baltazarapp.bak.hr/rest/smjerovi.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                request.success(function (data) {
                  $scope.smjerovi = data;
                  console.log(data);
                });

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



        $scope.saveData = function () { 
            window.localStorage.setItem("smjer", $scope.odabraniSmjer);
            window.localStorage.setItem("godina",  $scope.odabranaGodina); 
            $state.go("bapp.profil");

        }


    });
