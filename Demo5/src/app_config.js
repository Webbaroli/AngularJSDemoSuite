'use strict';

angular
    .module('AppDemo5Module') //COSI LEGGE UN MODULO!!! NOTARE LA MANCANZA DI []

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/pageA'
        });
    }])
;