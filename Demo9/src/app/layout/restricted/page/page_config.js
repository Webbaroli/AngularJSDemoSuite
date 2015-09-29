(function() {
    'use strict';

    angular
        .module('PageModule')
        .config(PageConfig)
    ;

    PageConfig.$inject = ['$stateProvider'];

    function PageConfig($stateProvider) {
        $stateProvider.state('restricted.page', {
            url: '/page',
            views: {
                'content@restricted': {
                    templateUrl: 'layout/restricted/page/page_content.html',
                    controller: 'PageController'
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