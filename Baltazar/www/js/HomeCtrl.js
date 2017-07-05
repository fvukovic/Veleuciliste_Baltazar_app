var app = angular.module('starter')

app.filter('unique', function () {
  return function (collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function (item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});
app.controller('HomeCtrl', function ($scope, $stateParams, $http, $state, $timeout, $cordovaNetwork, $ionicLoading, $filter) {

  $scope.tip = "";
  console.log("USAO");
  $scope.vijesti = [];
  $scope.lista = JSON.parse(window.localStorage.getItem("godina"));
  if ($scope.lista == null) {
    $scope.lista = [
      { id: '-1', title: 'Duh', checked: false },
    ]
  }
  var currentState = $state.current.name;
  if (currentState == "app.home") {
    $scope.tip = "Novosti";
    if (window.localStorage.getItem("login") == "1") {
      $state.go("bapp.home", {}, { reload: true });

    }

    var request = $http({
      method: "GET",
      url: 'https://baltazarapp.bak.hr/rest/newsList.php',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.success(function (data) {
      for (var v = 0; v < data.length; v++) {

      }
      $scope.vijesti = data;
      console.log(data);
    });


  }
  $scope.remMedia = function () {

    if ($cordovaNetwork.isOnline() == true) {

      $timeout(funkcija, 2000);
    } else {
      $ionicLoading.show({ template: 'Nema interneta!', noBackdrop: true, duration: 3000 });
    }

    $timeout(function () {

      $timeout(funkcija, 2000);
    }, 1000);
  }


  function UniqueArraybyId(collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function (item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };

  function funkcija() {
    $state.go($state.current, {}, { reload: true });
  }
  if (currentState == "bapp.home") {
    $scope.tip = "Novosti";
    for (var k = 0; k < $scope.lista.length; k++) { 
      var request = $http({
        method: "POST",
        url: 'https://baltazarapp.bak.hr/rest/newsList.php',
        data: { smjer: window.localStorage.getItem("smjer"), godina: $scope.lista[k]["id"] },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        console.log(data);
        for (var v = 0; v < data.length; v++) {
          $scope.vijesti.push({
            id: data[v]["id"], title: data[v]["title"], title: data[v]["title"], description: data[v]["description"], date: data[v]["date"], images: data[v]["images"], link: data[v]["link"], linktitle: data[v]["linktitle"]
          });

        }

        $scope.vijesti = UniqueArraybyId($scope.vijesti, "id");
        console.log($scope.vijesti);

      });

    }

  }


  if (currentState == "app.diplomski" || currentState == "bapp.diplomski") {


    for (var k = 0; k < $scope.lista.length; k++) {

      $scope.tip = "Diplomski";
      var request = $http({
        method: "POST",
        url: 'https://baltazarapp.bak.hr/rest/diplomski.php',
        data: { smjer: window.localStorage.getItem("smjer"), godina: $scope.lista[k]["id"] },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        console.log(data);
        for (var v = 0; v < data.length; v++) {
          $scope.vijesti.push({
            id: data[v]["id"], title: data[v]["title"], title: data[v]["title"], description: data[v]["description"], date: data[v]["date"], images: data[v]["images"], link: data[v]["link"], linktitle: data[v]["linktitle"]
          });

        }

        $scope.vijesti = UniqueArraybyId($scope.vijesti, "id");
        console.log($scope.vijesti);

      });

    }

  }


  if (currentState == "app.studenti" || currentState == "bapp.studenti") {

    for (var k = 0; k < $scope.lista.length; k++) {

      $scope.tip = "Studenti";
      var request = $http({
        method: "POST",
        url: 'https://baltazarapp.bak.hr/rest/studenti.php',
        data: { smjer: window.localStorage.getItem("smjer"), godina: $scope.lista[k]["id"] },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        console.log(data);
        for (var v = 0; v < data.length; v++) {
          $scope.vijesti.push({
            id: data[v]["id"], title: data[v]["title"], title: data[v]["title"], description: data[v]["description"], date: data[v]["date"], images: data[v]["images"], link: data[v]["link"], linktitle: data[v]["linktitle"]
          });

        }

        $scope.vijesti = UniqueArraybyId($scope.vijesti, "id");
        console.log($scope.vijesti);

      });

    }



  }

  if (currentState == "app.medunarodna" || currentState == "bapp.medunarodna") {
    $scope.tip = "Međunarodna suradnja";
    for (var k = 0; k < $scope.lista.length; k++) {
      var request = $http({
        method: "POST",
        url: 'https://baltazarapp.bak.hr/rest/international.php',
        data: { smjer: window.localStorage.getItem("smjer"), godina: $scope.lista[k]["id"] },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        console.log(data);
        for (var v = 0; v < data.length; v++) {
          $scope.vijesti.push({
            id: data[v]["id"], title: data[v]["title"], title: data[v]["title"], description: data[v]["description"], date: data[v]["date"], images: data[v]["images"], link: data[v]["link"], linktitle: data[v]["linktitle"]
          });

        }

        $scope.vijesti = UniqueArraybyId($scope.vijesti, "id");
        console.log($scope.vijesti);

      });

    }


  }




  if (currentState == "app.preddiplomski" || currentState == "bapp.preddiplomski") {
    $scope.tip = "Preddiplomski";
    for (var k = 0; k < $scope.lista.length; k++) {
      var request = $http({
        method: "POST",
        url: 'https://baltazarapp.bak.hr/rest/preddiplomski.php',
        data: { smjer: window.localStorage.getItem("smjer"), godina: $scope.lista[k]["id"] },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

      });
      request.success(function (data) {
        console.log(data);
        for (var v = 0; v < data.length; v++) {
          $scope.vijesti.push({
            id: data[v]["id"], title: data[v]["title"], title: data[v]["title"], description: data[v]["description"], date: data[v]["date"], images: data[v]["images"], link: data[v]["link"], linktitle: data[v]["linktitle"]
          });

        }

        $scope.vijesti = UniqueArraybyId($scope.vijesti, "id");
        console.log($scope.vijesti);

      });

    }


  }





});

