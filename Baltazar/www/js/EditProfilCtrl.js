angular.module('starter')
    .controller('EditProfilCtrl', function ($scope, $stateParams, $http, $state) {
        $scope.smjerovi = {};
        $scope.smjer = window.localStorage.getItem("smjer");
        $scope.smjerRe = window.localStorage.getItem("smjer");
        $scope.godina = window.localStorage.getItem("godina");
        $scope.checkItems=[]
        $scope.godineSel = JSON.parse(window.localStorage.getItem("godina"));
          if ($scope.godineSel == null) {
    $scope.godineSel = [
      { id: '-122', title: 'Duh', checked: false },
    ]
  }
        var request = $http({
            method: "GET",
            url: 'https://baltazarapp.bak.hr/rest/smjerovi.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });


        request.success(function (data) {

            //         for(var i =0;i<data.length;i++){
            //           $scope.smjerovi[i]={name: data[i]["title"]};             } 
            console.log($scope.smjerovi);
            $scope.smjerovi = [
              
            ]

            for (var i = 0; i < data.length; i++) {
                $scope.smjerovi.push({
                    id: data[i]["title"], title: data[i]["id"]
                });
            }

        });
        $scope.ime = window.localStorage.getItem("ime")
        $scope.prezime = window.localStorage.getItem("prezime")
        $scope.mail = window.localStorage.getItem("mail")
        $scope.tel = window.localStorage.getItem("tel")
        $scope.adresa = window.localStorage.getItem("adresa")


        var request = $http({
            method: "GET",
            url: 'https://baltazarapp.bak.hr/rest/godine.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.success(function (data) { 
            $scope.godine = [
                
            ]
 


            for (var i = 0; i < data.length; i++) {
               
                var postoji = false;
                for (var v = 0; v < $scope.godineSel.length; v++) {  
                    if (data[i]["id"] == $scope.godineSel[v]["id"]) { 
                        $scope.godine.push({
                            id: data[i]["id"], title: data[i]["title"], checked: true
                        });
                        postoji = true; 
                    }
                }
                if (postoji == false) { 
                    $scope.godine.push({
                        id: data[i]["id"], title: data[i]["title"], checked: false
                    });
                    postoji = false;

                }

            }
                     angular.forEach($scope.godine, function(value, key){
      if(value.checked){
         $scope.checkItems.push(value);
      }
  });
            console.log($scope.godine);
        });

        $scope.showSelectValue = function (mySelect) {
            $scope.odabraniSmjer = mySelect;

        }
        $scope.showSelectValueG = function (mySelect) {
            $scope.odabranaGodina = mySelect;
        }
     $scope.print = function(godina){
    var idx = $scope.checkItems.indexOf(godina);

    // Is currently selected
    if (idx > -1) {
      $scope.checkItems.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.checkItems.push(godina);
    }
   console.log($scope.checkItems);
  }


        $scope.saveData = function () {

        
             var array = [];
    for(var i in $scope.checkItems) {
        console.log($scope.checkItems[i]);
        if($scope.checkItems[i] == true) {
            array.push(i);
        }
    }
    console.log($scope.checkItems);
            window.localStorage.setItem("godina", JSON.stringify($scope.checkItems));
        
            if ($scope.odabraniSmjer != null) {
                window.localStorage.setItem("smjer", $scope.odabraniSmjer);
            }
             
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
