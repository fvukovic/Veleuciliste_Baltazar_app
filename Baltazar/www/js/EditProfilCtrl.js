angular.module('starter')
    .controller('EditProfilCtrl', function ($scope, $stateParams, $http, $state) {
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
            if($scope.odabraniSmjer=="" || $scope.odabranaGodina=="" || document.getElementById("ime").value=="" || document.getElementById("prezime").value=="" || document.getElementById("adresa").value=="" || document.getElementById("tel").value=="" || document.getElementById("mail").value==""){
                alert("Nisu svi podaci upisani");
                return 0;
            }
            window.localStorage.setItem("smjer", $scope.odabraniSmjer);
            window.localStorage.setItem("godina", $scope.odabranaGodina);
            window.localStorage.setItem("adresa", document.getElementById("adresa").value);
            window.localStorage.setItem("tel", document.getElementById("tel").value);
            window.localStorage.setItem("ime", document.getElementById("ime").value);
            window.localStorage.setItem("prezime", document.getElementById("prezime").value);
            window.localStorage.setItem("mail", document.getElementById("mail").value);
            var request = $http({
                method: "POST",
                url: 'https://baltazarapp.bak.hr/rest/newsDetails.php',
                data: {
                    push: "1", os: "android", token: window.localStorage.getItem("token"), godina: $scope.odabranaGodina, smjer: $scope.odabraniSmjer, ime: document.getElementById("ime").value, prezime: document.getElementById("prezime")
                        .value, telefon: document.getElementById("tel").value, adresa: document.getElementById("adresa").value, email: document.getElementById("mail").value
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            });
            request.success(function (data) {

                console.log("Prijava" + data);
                
            });
            $state.go("bapp.profil");

        }


    });
