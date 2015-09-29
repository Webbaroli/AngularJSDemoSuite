'use strict';

angular
    .module('BackendServiceModule')
    .factory('BackendServiceFactory', ['$log','$timeout','$q','$rootScope', function($log, $timeout, $q, $rootScope){
        var api = {
            chiamataAlBackend: chiamataAlBackend
        };

        function chiamataAlBackend(){
            $log.debug('Chiama al backend - start');

            //simulo una richiesta che impiega 5 secondi ad essere eseguita
            var deferred = $q.defer();

            $timeout(
                function(){
                    $log.debug('Resolve/reject della promise - start');

                    var flagReject = $rootScope.flagReject || false;

                    if(flagReject == false){
                        $log.debug('Risolvo la promessa (esito positivo)');
                        deferred.resolve("CIAO DAL BACKEND!");
                    }else{
                        $log.debug('Rigetto la promessa (esito negativo)');
                        deferred.resolve("ERRORE DAL BACKEND!");
                    }
                },
                10000
            );


            $log.debug('Chiama al backend effettuata - aspetta 10 secondi');

            return deferred.promise;
        }

        return api;
    }])
;