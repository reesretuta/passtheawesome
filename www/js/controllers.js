angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope','ContactService', function ($scope,ContactService) {
        $scope.status = "It works!";
        
        $scope.closePopup = function(){
            $("#overlay-wrap").fadeOut(500);
            
        }
        $scope.pickFriend = function(friend,number){
          $scope.friend = friend;
          $scope.$apply(function(){
              $scope.friend = 'bbbbbbbbbb';
          });
          
          
          $("#overlay-wrap").fadeIn(500);
          recipient = number;
        }

        $scope.findContact = function (contactSearch) {
          
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