(function() {
    'use strict';

    angular
        .module('HomeModule')
        .config(HomeConfig)
    ;

    HomeConfig.$inject = ['$stateProvider'];

    function HomeConfig($stateProvider) {
        $stateProvider.state('restricted.home', {
            url: '/home',
            views: {
                'content@restricted': {
                    templateUrl: 'layout/restricted/home/home_content.html',
                    controller: 'HomeController'
                }
            },
            resolve: {
                authenticated: ['AuthenticationService', function(AuthenticationService){
                    return AuthenticationService.resolveAuthentication();
                }]
            }
        });
    }

})();