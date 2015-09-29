(function() {
    'use strict';

    angular
        .module('RegistrationModule')
        .controller('RegistrationController', RegistrationController)
    ;

    RegistrationController.$inject = ['$scope', '$log'];

    function RegistrationController($scope, $log) {
        $log.debug('RegistrationController');

        $scope.registrationData = {
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        };

        $scope.executingRegistration = false;

        $scope.registration = function () {
            alert("Executing registration method (fake registration!) with this credentials: "+angular.toJson($scope.registrationData,true));
        };
    }

})();