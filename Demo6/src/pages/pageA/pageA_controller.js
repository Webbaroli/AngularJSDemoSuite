'use strict';

angular
    .module('PageAModule')
    .controller('PageAController', ['$log','$scope', 'BackendServiceFactory', '$rootScope', function($log, $scope, BackendServiceFactory, $rootScope){
            $log.debug('Page A Controller');

            $scope.messaggio = "Premi il bottone!";

            $scope.chiamataAlBackend = function(){
                $scope.messaggio = "Aspetta 10 secondi";
                BackendServiceFactory.chiamataAlBackend().then(
                    function(mes){
                        $log.debug("Chiamata successo!");
                        $scope.messaggio = mes;
                    },
                    function(mes){
                        $log.debug("Chiamata errore!");
                        $scope.messaggio = mes;
                    }
                );
            };

            $rootScope.flagReject = false;
            $scope.backendRejectResult = function(rejectResult){
                $log.debug('Set reject backend response = '+rejectResult);
                $rootScope.flagReject = rejectResult;
            };
        }
    ])
;