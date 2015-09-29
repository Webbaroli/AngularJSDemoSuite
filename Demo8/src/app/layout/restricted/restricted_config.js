(function() {
    'use strict';

    angular
        .module('RestrictedModule')
        .config(RestrictedConfig)
    ;

    RestrictedConfig.$inject = ['$stateProvider'];

    function RestrictedConfig($stateProvider) {
        $stateProvider
            .state('restricted', {
                views: {
                    '': {
                        templateUrl: 'layout/restricted/restricted_layout.html',
                        controller: 'RestrictedController'
                    },
                    'menu@restricted': {
                        templateUrl: 'layout/restricted/menu_restricted.html'
                    }
                }
            });
    }

})();