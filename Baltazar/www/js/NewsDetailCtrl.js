angular.module('starter')
  .controller('NewsDetailCtrl', function ($scope, $stateParams, $http) { 
 $scope.title;
 $scope.description;
 $scope.image;
 $scope.images=[];
   var request =$http({            
            method: "POST",
            url: 'https://baltazarapp.bak.hr/rest/newsDetails.php',
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

 
      });