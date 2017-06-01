// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','ngMap' ])
.run(function($ionicPlatform,$http) {
  $ionicPlatform.ready(function() { 
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }  
    if(window.localStorage.getItem("token")==null){
    window.FirebasePlugin.getToken(function(token) {
    var request =$http({            
            method: "POST",
            url: 'https://baltazarapp.bak.hr/rest/createUser.php',
            data:{token:token,os:"Android"},
            headers : {'Content-Type' : 'application/x-www-form-urlencoded' }
            
        }); 
        request.success(function (data) { 
       
       
      });
      window.localStorage.setItem("token",token);
    console.log(token);
}, function(error) {
    console.error(error);
});
}
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
    templateUrl: 'templates/bappBijeli.html',
    controller: 'AppCtrl'
  })
    .state('appBijeli', {
    url: '/bapp',
    abstract: true,
    templateUrl: 'templates/appBijeli.html',
    controller: 'AppCtrl'
  })


  .state('app.home', {
    url: '/home',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
          controller:'HomeCtrl'
      }
    }
  })
  .state('app.map', {
    url: '/map',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
          controller:'MapCtrl'
      }
    }
  })
    .state('bapp.map', {
    url: '/map2',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
          controller:'MapCtrl'
      }
    }
  })
   .state('bapp.meet', {
    url: '/meet',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/meetUs.html',
          controller:'MeetUsCtrl'
      }
    }
  })
     .state('app.meet', {
    url: '/meet2',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/meetUs.html',
          controller:'MeetUsCtrl'
      }
    }
  })
    .state('bapp.home', {
    url: '/student',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller:'HomeCtrl'
      }
    }
  }) 



  .state('bappBijeli.detalji', {
    url: '/detalji/:vijestId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/detalji.html',
        controller:'NewsDetailCtrl'
      }
    }
  })
     .state('bappBijeli.kontakt', {
    url: '/kontakt2',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/kontakt.html',
        controller:"KontaktCtrl"
      }
    }
  })
  .state('appBijeli.kontakt', {
    url: '/kontakt2',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/kontakt.html',
        controller:"KontaktCtrl"
      }
    }
  })
    .state('appBijeli.about', {
    url: '/about',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutUs.html',
        controller:"AboutCtrl"
      }
    }
  })
  
      .state('bappBijeli.about', {
    url: '/about1',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutUs.html',
        controller:"AboutCtrl"
      }
    }
  })
  

   .state('bapp.profil', {
    url: '/profil',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/profil.html',
        controller:"ProfilCtrl"
      }
    }
  })
    .state('bapp.edit', {
    url: '/edit',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/editProfil.html',
        controller:"EditProfilCtrl"
      }
    }
  })
   .state('bapp.login', {
    url: '/login',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller:'LoginCtrl'
      }
    }
  })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});