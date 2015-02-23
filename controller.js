var myApp = angular.module("myApp", []);

myApp.controller("couchCtrl", ["$scope", "$http", function($scope, $http){
   
    
    $scope.submit = function(){
         var name = $scope.fName;
        console.log($scope.fName);
    var url = "https://mean-hwi-syedkazmi.c9.io/users";
    $http.post(url, {
            
            name: $scope.fName
        })
    
    .success(function(data, status, headers, config){
        
      //alert("AJAX Returned!");
      console.log($scope.fName);
    
    })
    
    .error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(data);
    console.log("error in controller");
  });
        
      
    };
    
    
}]);