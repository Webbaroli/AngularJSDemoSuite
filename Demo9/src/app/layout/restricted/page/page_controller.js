(function() {
    'use strict';

    angular
        .module('PageModule')
        .controller('PageController', PageController)
    ;

    PageController.$inject = ['$scope', '$state', '$log'];

    function PageController($scope, $state, $log) {
        $log.debug('PageController');
    }

})();