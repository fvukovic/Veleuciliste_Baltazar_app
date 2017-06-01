// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','ngMap'])
.run(function($ionicPlatform,$http) {
  $ionicPlatform.ready(function() {
    window.FirebasePlugin.grantPermission();
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    } 
    window.FirebasePlugin.setBadgeNumber(3);
     window.FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
window.FirebasePlugin.onNotificationOpen(function(notification) {
    console.log(notification[0]);
    alert("Stigla je notifikacija");
}, function(error) {
    console.error(error);
});
  
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('bapp', {
    url: '/bapp',
    abstract: true,
    templateUrl: 'templates/menu2.html',
    controller: 'AppCtrl'
  })
     .state('bappBijeli', {
    url: '/bapp',
    abstract: true,
    templateUrl: 'templates/menuBijeli.html',
    controller: 'AppCtrl'
  })


  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
   .state('app.kontakt', {
    url: '/kontakt',
    views: {
      'menuContent': {
        templateUrl: 'templates/kontakt.html',
        controller: 'KontaktCtrl'
      }
    }
  })
     .state('app.meet', {
    url: '/meet',
    views: {
      'menuContent': {
        templateUrl: 'templates/meetUs.html',
        controller: 'MeetUsCtrl'
      }
    }
  })
    .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'AboutCtrl'
      }
    }
  })
    .state('bapp.home', {
    url: '/student',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
         controller: 'HomeCtrl'
      }
    }
  })

  .state('bappBijeli.detalji', {
      cache:false,
    url: '/detalji/:vijestId',
    views: {
      'menuContent': {
        templateUrl: 'templates/detalji.html',
        controller: 'NewsDetailCtrl'
      }
    }
  })
   .state('bapp.profil', {
    url: '/profil',
    views: {
      'menuContent': {
        templateUrl: 'templates/profil.html',
        controller: 'ProfilCtrl'
      }
    }
  })
    .state('bapp.edit', {
    url: '/edit',
    views: {
      'menuContent': {
        templateUrl: 'templates/editProfil.html',
        controller:'EditProfilCtrl'
      }
    }
  })
   .state('bapp.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller:'MapCtrl'
      }
    }
  })
   .state('bapp.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});