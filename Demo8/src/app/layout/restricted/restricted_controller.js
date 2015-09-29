(function() {
    'use strict';

    angular
        .module('RestrictedModule')
        .controller('RestrictedController', RestrictedController)
    ;

    RestrictedController.$inject = ['$log'];

    function RestrictedController($log) {
        $log.debug('RestrictedController');

    }

})();