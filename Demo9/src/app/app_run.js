(function() {
    'use strict';

    angular
        .module('Demo9AppModule')
        .run(Demo9AppModuleRun)
        .run(Language)
    ;

    Demo9AppModuleRun.$inject = ['$rootScope', '$state', '$log'];

    function Demo9AppModuleRun($rootScope, $state, $log) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.debug('State change error -> redirect to guest.login');
            $state.go('guest.login');
        });
    }

    Language.$inject = ['gettextCatalog'];

    function Language(gettextCatalog){
        gettextCatalog.setCurrentLanguage('nl');
        gettextCatalog.debug = true;
    }

})();
