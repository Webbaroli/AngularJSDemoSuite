(function() {
    'use strict';

    angular
        .module('LoginModule')
        .controller('LoginController', LoginController)
    ;

    LoginController.$inject = ['$scope', '$state', '$log', 'AuthenticationService'];

    function LoginController($scope, $state, $log, AuthenticationService) {
        $log.debug('LoginController');

        $scope.loginData = {
            username: '',
            password: ''
        };

        $scope.executingLogin = false;

        $scope.login = function () {
            $log.debug("Executing login method (fake login!) with this credentials: "+angular.toJson($scope.loginData,true));
            AuthenticationService.login($scope.loginData).then(
                function(){
                    $log.debug('Login success');
                    $state.go('restricted.home');
                },
                function(){
                    $log.debug('Login error');
                }
            );
        };

    }

})();