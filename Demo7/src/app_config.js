'use strict';

angular
    .module('AppDemo7Module')

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/pageA');
    }])
;