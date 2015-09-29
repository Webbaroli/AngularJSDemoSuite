(function() {
    'use strict';

    angular
        .module('HomeModule')
        .controller('HomeController', HomeController)
    ;

    HomeController.$inject = ['$scope', '$state', '$log', 'AuthenticationService'];

    function HomeController($scope, $state, $log, AuthenticationService) {
        $log.debug('HomeController');

        $scope.logout = function(){
            $log.debug('Logout execution');
            AuthenticationService.logout();
            $state.go('guest.login');
        };

    }

})();