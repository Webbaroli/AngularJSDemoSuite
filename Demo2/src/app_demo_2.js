'use strict';

angular
    .module('AppDemo2Module',[])
    .controller('AppDemo2Controller', function($scope){
        console.log('AppDemo2Controller');

        $scope.helloMessage = 'Ciao dalla demo 2';

        $scope.visualizzaAlert = function(){
            alert('Ciao '+$scope.name);
        }
    })
;