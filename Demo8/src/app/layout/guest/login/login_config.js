(function() {
    'use strict';

    angular
        .module('LoginModule')
        .config(LoginConfig)
    ;

    LoginConfig.$inject = ['$stateProvider'];

    function LoginConfig($stateProvider) {
        $stateProvider.state('guest.login', {
            url: '/login',
            views: {
                'content@guest': {
                    templateUrl: 'layout/guest/login/login_content.html',
                    controller: 'LoginController'
                }
            }
        });
    }

})();