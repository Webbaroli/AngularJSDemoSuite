'use strict';

angular
    .module('PageCModule')
    .controller('PageCController', ['$log','$scope', 'variabileDaOttenerePrimaDiArrivareSullaView', function($log, $scope, variabileDaOttenerePrimaDiArrivareSullaView){
            $log.debug('Page C Controller');
            $scope.variabile = variabileDaOttenerePrimaDiArrivareSullaView;
        }
    ])
;