(function() {
    'use strict';

    angular
        .module('Demo9AppModule')
        .config(Demo9AppModuleConfig)
    ;

    Demo9AppModuleConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$logProvider'];

    function Demo9AppModuleConfig($locationProvider, $urlRouterProvider, $logProvider) {
        $urlRouterProvider.otherwise('/login');
        //TODO - DISABLE LOGGING IN PRODUCTION
        $logProvider.debugEnabled(true);
        //TODO - ADD HTML MODE IN PRODUCTION
        $locationProvider.html5Mode(false);
    }

})();
