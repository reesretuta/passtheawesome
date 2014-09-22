angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope','ContactService', function ($scope,ContactService) {
        $scope.status = "It works!";
        

        $scope.findContact = function (contactSearch) {
            alert('findContact clicked');
            ContactService.find(contactSearch).then(function (contacts) {
              alert(contacts);
              
                $scope.contacts = contacts;
                
            }, function (error) {

            });
        };

    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);