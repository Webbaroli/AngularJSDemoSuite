(function() {
    'use strict';

    angular
        .module('AuthenticationServiceModule')
        .factory('AuthenticationService', AuthenticationServiceFactory)
    ;

    AuthenticationServiceFactory.$inject = ['$q', '$log', '$localStorage'];

    function AuthenticationServiceFactory($q, $log, $localStorage) {
        var factoryApi = {
            login: login,
            logout: logout,
            resolveAuthentication: resolveAuthentication
        };

        //FAKE LOGIN -> it should implement $http api call to backend
        function login(loginData) {
            var deferred = $q.defer();

            if(loginData.username == 'pippo'){
                $localStorage.isAuthorized = true;
                deferred.resolve();
            }else{
                deferred.reject();
            }
            
            return deferred.promise;
        }

        function logout() {
            $localStorage.isAuthorized = false;
        }

        function resolveAuthentication() {
            var defer = $q.defer();
            if ($localStorage.isAuthorized){
                $log.debug("Authorized");
                defer.resolve(true);
            }else{
                $log.debug('Not authorized!');
                defer.reject();
            }
            return defer.promise;
        }

        return factoryApi;
    }
})();
