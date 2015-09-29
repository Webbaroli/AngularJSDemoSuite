(function() {
    'use strict';

    angular
        .module('TestModule')
        .controller('TestController', TestController)
    ;

    TestController.$inject = ['$scope', '$state', '$log', 'AuthenticationService', 'gettextCatalog'];

    function TestController($scope, $state, $log, AuthenticationService, gettextCatalog) {
        $log.debug('TestController');

        $scope.language = function(langId){
            gettextCatalog.setCurrentLanguage(langId);
        };

        $scope.name = "aaaaaaaa!";
    }

})();