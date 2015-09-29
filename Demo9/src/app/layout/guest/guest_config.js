(function() {
    'use strict';

    angular
        .module('GuestModule')
        .config(GuestConfig)
    ;

    GuestConfig.$inject = ['$stateProvider'];

    function GuestConfig($stateProvider) {
        $stateProvider
            .state('guest', {
                views: {
                    '': {
                        templateUrl: 'layout/guest/guest_layout.html',
                        controller: 'GuestController'
                    },
                    'menu@guest': {
                        templateUrl: 'layout/guest/menu_guest.html'
                    }
                }
            });
    }

})();