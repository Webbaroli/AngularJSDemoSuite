(function() {
    'use strict';

    angular
        .module('Demo8AppModule')
        .run(Demo8AppModuleRun)
    ;

    Demo8AppModuleRun.$inject = ['$rootScope', '$state', '$log'];

    function Demo8AppModuleRun($rootScope, $state, $log) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.debug('State change error -> redirect to guest.login');
            $state.go('guest.login');
        });
    }

})();
