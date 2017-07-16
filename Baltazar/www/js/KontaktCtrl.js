angular.module('starter')
  .controller('KontaktCtrl', function ($scope, $stateParams, $http) {  
    $scope.title;
 $scope.description;
 $scope.image;
 $scope.message;
 $scope.images=[];
 $scope.adresa=window.localStorage.getItem("adresa");
 $scope.ime = window.localStorage.getItem("ime")+ " "+ window.localStorage.getItem("prezime");
 $scope.tel= window.localStorage.getItem("tel");
   $scope.email=window.localStorage.getItem("mail");

   var request =$http({            
            method: "POST",
            url: 'https://baltazarapp.bak.hr/rest/contact.php',
            data:{id:($stateParams.vijestId)},
            headers : {'Content-Type' : 'application/x-www-form-urlencoded' }
            
        }); 
        request.success(function (data) {
       console.log(data);
       $scope.title=data[0]['title']
        $scope.description=data[0]['description']
         $scope.image=data[0]['images'][0]
         for(var v=1;v<data[0]['images'].length;v++){
               $scope.images.push({
        image:data[0]['images'][v],
       
      });
       
         }
console.log("slikice"+$scope.images.length);
        
});

  $scope.sendEmail = function () { 
            $scope.email = document.getElementById("email").value;
            $scope.message = document.getElementById("message").value;
            $scope.ime= document.getElementById("ime").value;
            $scope.adresa=document.getElementById("adresa").value;            
            $scope.tel=document.getElementById("tel").value;
                if ($scope.email == "" || $scope.message == "") {
                alert("E-mail i poruka ne smiju biti prazni!");
                return;
            } 
 
            var request = $http({

                method: "POST",
                url: 'https://baltazarapp.bak.hr/rest/mail_sender.php',
                data: { mail: $scope.email, poruka: $scope.message, ime: $scope.ime, adresa: $scope.adresa, tel : $scope.tel},
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

            }); 
            request.success(function (data) {
                console.log("PORUKA"+data);
                document.getElementById('message').value='';
                alert("Poruka je poslana!");
              
            });



            
        }

      });

   
