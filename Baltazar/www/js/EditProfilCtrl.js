angular.module('starter')
    .controller('EditProfilCtrl', function ($scope, $stateParams, $http) {

        $scope.saveData = function () {
            window.localStorage.setItem("mail", document.getElementById("mail").value);
            window.localStorage.setItem("mail", document.getElementById("tel").value);
            window.localStorage.setItem("mail", document.getElementById("adresa").value);
            window.localStorage.setItem("mail", document.getElementById("postanski").value);
            window.localStorage.setItem("mail", document.getElementById("mjesto").value);
            alert(window.localStorage.getItem("tel"))


        }


    });
