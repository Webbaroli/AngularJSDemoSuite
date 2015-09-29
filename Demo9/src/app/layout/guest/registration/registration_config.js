(function() {
    'use strict';

    angular
        .module('RegistrationModule')
        .config(RegistrationConfig)
    ;

    RegistrationConfig.$inject = ['$stateProvider'];

    function RegistrationConfig($stateProvider) {
        $stateProvider.state('guest.registration', {
            url: '/registration',
            views: {
                'content@guest': {
                    templateUrl: 'layout/guest/registration/registration_content.html',
                    controller: 'RegistrationController'
                }
            }
        });
    }

})();