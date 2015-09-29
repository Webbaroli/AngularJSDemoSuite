'use strict';

angular
    .module('AppDemo3Module',[])
    .controller('MainController', function($scope){
        $scope.nomeController = 'MainController';
    })
    .controller('ControllerA', function($scope){
        $scope.nomeController = 'ControllerA';
    })
    .controller('ControllerAA', function($scope){
        $scope.nomeController = 'ControllerAA';
    })
    .controller('ControllerAB', function($scope){
        $scope.nomeController = 'ControllerAB';
    })
    .controller('ControllerB', function($scope){
        $scope.nomeController = 'ControllerB';
    })
    .controller('ControllerBA', function($scope){
        $scope.nomeController = 'ControllerBA';
    })
    .controller('ControllerBB', function($scope){
        $scope.nomeController = 'ControllerBB';
    })
;