(function() {
    'use strict';

    angular
        .module('Demo8AppModule')
        .config(Demo8AppModuleConfig)
    ;

    Demo8AppModuleConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$logProvider'];

    function Demo8AppModuleConfig($locationProvider, $urlRouterProvider, $logProvider) {
        $urlRouterProvider.otherwise('/login');
        //TODO - DISABLE LOGGING IN PRODUCTION
        $logProvider.debugEnabled(true);
        //TODO - ADD HTML MODE IN PRODUCTION
        $locationProvider.html5Mode(false);
    }

})();
