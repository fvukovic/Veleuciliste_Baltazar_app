angular.module('starter')
  .controller('MapCtrl', function (NgMap, $scope, $state, $cordovaGeolocation) {
    NgMap.getMap().then(function (map) {
      $scope.markers = [];

      $scope.markers.push({
        id: "",
        lat: "45.859076",
        long: "15.808016",
        naslov:"Veleučilište Baltazar"
      });
       $scope.markers.push({
        id: "",
        lat: "45.794108",
        long: "15.999186",
        naslov:"Veleučilište Baltazar"
      });
    });
  });