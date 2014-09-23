angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope','ContactService', function ($scope,ContactService) {
        $scope.status = "It works!";
        

        $scope.findContact = function (contactSearch) {
          alert('findContact here');
          
            ContactService.find(contactSearch).then(function (contacts) {

              
                $scope.contacts = contacts;
                
            }, function (error) {
              alert(error);
              
            });
        };

    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);