angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
    .controller('PetIndexCtrl', function($scope, PetService) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pets = PetService.all();
    })


// A simple controller that shows a tapped item's data
    .controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pet = PetService.get($stateParams.petId);
    })

    .controller('TabsCtrl', function($scope){
        $scope.rightButtons = [
            {
                type: 'button-clear button-dark icon-right ion-log-out',
                tap: function (e) {
                    alert('clicked')
                }
            }
        ];
    });
