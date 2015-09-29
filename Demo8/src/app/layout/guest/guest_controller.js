(function() {
    'use strict';

    angular
        .module('GuestModule')
        .controller('GuestController', GuestController)
    ;

    GuestController.$inject = ['$log'];

    function GuestController($log) {
        $log.debug('GuestController');

    }

})();