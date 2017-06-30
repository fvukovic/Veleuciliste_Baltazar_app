var c = angular.module('starter')
  .controller('NewsDetailCtrl', function ($scope,$stateParams,$http, $location, $cordovaGeolocation, $http, $ionicHistory, $state,$ionicLoading, $scope, $ionicPlatform, $rootScope, $location, $cordovaGeolocation, $http, $ionicHistory, $state) {
    $scope.title;
    $scope.description;
    $scope.image;
    $scope.link;
    $scope.linkTitle;
    $scope.images = [];

c.directive('browseTo', function ($ionicGesture) {
 return {
  restrict: 'A',
  link: function ($scope, $element, $attrs) {
   var handleTap = function (e) {
    // todo: capture Google Analytics here
    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
   };
   var tapGesture = $ionicGesture.on('tap', handleTap, $element);
   $scope.$on('$destroy', function () {
    // Clean up - unbind drag gesture handler
    $ionicGesture.off(tapGesture, 'tap', handleTap);
   });
  }
 }
});

  $scope.goOnURL = function(adress){  
cordova.InAppBrowser.open( $scope.link, '_system');

  }

    var request = $http({
      method: "POST",
      url: 'https://baltazarapp.bak.hr/rest/newsDetails.php',
      data: { id: ($stateParams.vijestId) },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    });
    request.success(function (data) {
      console.log(data);
      $scope.title = data[0]['title']
      $scope.description = data[0]['description']
      $scope.image = data[0]['images'][0] 
      $scope.link = data[0]["link"];
      $scope.linkTitle = data[0]["linktitle"];

      for (var v = 1; v < data[0]['images'].length; v++) {
        $scope.images.push({
          image: data[0]['images'][v],

        });

      }
      console.log("slikice" + $scope.images.length);

    });


  });